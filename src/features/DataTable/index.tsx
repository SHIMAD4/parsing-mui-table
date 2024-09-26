import React, { FC, useMemo, useState, useCallback, ChangeEvent } from 'react';
import { FiltersForm } from '@/shared/ui/molecules';
import { DataTable } from '@/shared/ui/molecules';
import { SelectChangeEvent } from '@mui/material';
import _ from 'lodash'

export const MainComponent: FC = ({ jsonData }) => {
    const [filter, setFilter] = useState({
        programName: '',
        fieldOfStudy: '',
        groupCode: '',
        activityField: '',
        hours: '',
        duration: '',
        form: '',
        document: '',
        cost: ''
    });

    const handleInputChange = useCallback(
        (key: keyof typeof filter) => (event: ChangeEvent<HTMLInputElement>) => {
            setFilter((prev) => ({
                ...prev,
                [key]: event.target.value
            }));
        },
        []
    );

    const handleSelectChange = useCallback(
        (key: keyof typeof filter) => (event: SelectChangeEvent) => {
            setFilter((prev) => ({
                ...prev,
                [key]: event.target.value
            }));
        },
        []
    );

    const uniqueGroupCodes: string[] = useMemo(
        () => _.uniq(jsonData.map(item => item['Укрупненная группа специальностей'])),
        [jsonData]
    );
    const uniqueDocuments: string[] = useMemo(
        () => _.uniq(jsonData.map(item => item['Документ об окончании обучения'])),
        [jsonData]
    );

    // Фильтрация данных
    const filteredData = useMemo(() => {
        return jsonData
            .filter((item) =>
                item['Полное наименование образовательной программы']
                    .toLowerCase()
                    .includes(filter.programName.toLowerCase())
            )
            .filter((item) =>
                item['Сфера профессиональной деятельности']
                    .toLowerCase()
                    .includes(filter.fieldOfStudy.toLowerCase())
            )
            .filter((item) =>
                !filter.groupCode || item['Укрупненная группа специальностей'] === filter.groupCode
            )
            .filter((item) =>
                item['Наименование области профессиональной деятельности']
                    .toLowerCase()
                    .includes(filter.activityField.toLowerCase())
            )
            .filter((item) =>
                !filter.hours || parseInt(item['Количество часов']) >= parseInt(filter.hours)
            )
            .filter((item) =>
                item['Срок обучения'].toLowerCase().includes(filter.duration.toLowerCase())
            )
            .filter((item) => !filter.form || item['Форма обучения'] === filter.form)
            .filter((item) => !filter.document || item['Документ об окончании обучения'] === filter.document)
            .filter((item) =>
                !filter.cost || parseInt(item['Стоимость руб.'].replace(/\D/g, '')) >= parseInt(filter.cost)
            );
    }, [filter, jsonData]);

    return (
        <div>
            <FiltersForm
                filter={filter}
                uniqueGroupCodes={uniqueGroupCodes}
                uniqueDocuments={uniqueDocuments}
                onInputChange={handleInputChange}
                onSelectChange={handleSelectChange}
            />
            <DataTable filteredData={filteredData} />
        </div>
    );
};

import { FC, ChangeEvent } from 'react';
import { InputField, SelectField } from '@/shared/ui/atoms';
import { SelectChangeEvent } from '@mui/material';

interface FiltersFormProps {
    filter: {
        programName: string;
        fieldOfStudy: string;
        groupCode: string;
        activityField: string;
        hours: string;
        duration: string;
        form: string;
        document: string;
        cost: string;
    };
    uniqueGroupCodes: string[];
    uniqueDocuments: string[];
    onInputChange: (key: keyof FiltersFormProps['filter']) => (event: ChangeEvent<HTMLInputElement>) => void;
    onSelectChange: (key: keyof FiltersFormProps['filter']) => (event: SelectChangeEvent) => void;
}

export const FiltersForm: FC<FiltersFormProps> = ({
                                                      filter,
                                                      uniqueGroupCodes,
                                                      uniqueDocuments,
                                                      onInputChange,
                                                      onSelectChange,
                                                  }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px', marginTop: '20px' }}>
            <InputField
                label="Полное наименование образовательной программы"
                value={filter.programName}
                onChange={onInputChange('programName')}
                style={{ flex: '1 1 45%' }}
            />
            <InputField
                label="Сфера профессиональной деятельности"
                value={filter.fieldOfStudy}
                onChange={onInputChange('fieldOfStudy')}
                style={{ flex: '1 1 45%' }}
            />
            <SelectField
                label="Укрупненная группа специальностей"
                value={filter.groupCode}
                onChange={onSelectChange('groupCode')}
                options={uniqueGroupCodes}
                style={{ flex: '1 1 45%' }}
            />
            <InputField
                label="Наименование области профессиональной деятельности"
                value={filter.activityField}
                onChange={onInputChange('activityField')}
                style={{ flex: '1 1 45%' }}
            />
            <InputField
                label="Количество часов"
                value={filter.hours}
                onChange={onInputChange('hours')}
                type="number"
                style={{ flex: '1 1 45%' }}
            />
            <InputField
                label="Срок обучения"
                value={filter.duration}
                onChange={onInputChange('duration')}
                style={{ flex: '1 1 45%' }}
            />
            <SelectField
                label="Форма обучения"
                value={filter.form}
                onChange={onSelectChange('form')}
                options={['Очно', 'Очно-заочная', 'Заочная']}
                style={{ flex: '1 1 45%' }}
            />
            <SelectField
                label="Документ об окончании обучения"
                value={filter.document}
                onChange={onSelectChange('document')}
                options={uniqueDocuments}
                style={{ flex: '1 1 45%' }}
            />
            <InputField
                label="Стоимость (руб.)"
                value={filter.cost}
                onChange={onInputChange('cost')}
                type="number"
                style={{ flex: '1 1 45%' }}
            />
        </div>
    );
};

import { FC } from 'react';
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { TableHeadCell, MemoizedTableRow } from '@/shared/ui/atoms';
import { TableRowData} from "@/shared/lib/types";

type DataTableProps = {
    filteredData: TableRowData[];
}

export const DataTable: FC<DataTableProps> = ({ filteredData }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>Полное наименование образовательной программы</TableHeadCell>
                        <TableHeadCell>Сфера профессиональной деятельности</TableHeadCell>
                        <TableHeadCell>Укрупненная группа специальностей</TableHeadCell>
                        <TableHeadCell>Наименование области профессиональной деятельности</TableHeadCell>
                        <TableHeadCell>Количество часов</TableHeadCell>
                        <TableHeadCell>Срок обучения</TableHeadCell>
                        <TableHeadCell>Форма обучения</TableHeadCell>
                        <TableHeadCell>Документ об окончании обучения</TableHeadCell>
                        <TableHeadCell>Стоимость (руб.)</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredData.length > 0 ? (
                        filteredData.map((row, index) => <MemoizedTableRow key={index} row={row} />)
                    ) : (
                        <TableRow>
                            <TableHeadCell>
                                Нет данных
                            </TableHeadCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

import { FC, memo } from "react";
import { TableRowProps } from '@/shared/lib/types'
import { TableCell, TableRow } from "@mui/material";

// Компонент строки таблицы
export const MemoizedTableRow: FC<TableRowProps> = memo(({ row }) => (
    <TableRow>
        <TableCell>{row['Полное наименование образовательной программы']}</TableCell>
        <TableCell>{row['Сфера профессиональной деятельности']}</TableCell>
        <TableCell>{row['Укрупненная группа специальностей']}</TableCell>
        <TableCell>{row['Наименование области профессиональной деятельности']}</TableCell>
        <TableCell>{row['Количество часов']}</TableCell>
        <TableCell>{row['Срок обучения']}</TableCell>
        <TableCell>{row['Форма обучения']}</TableCell>
        <TableCell>{row['Документ об окончании обучения']}</TableCell>
        <TableCell>{row['Стоимость руб.']}</TableCell>
    </TableRow>
));

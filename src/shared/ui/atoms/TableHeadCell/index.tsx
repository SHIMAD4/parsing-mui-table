import React, { FC } from 'react';
import { TableCell } from '@mui/material';

interface TableHeadCellProps {
    children: React.ReactNode;
}

export const TableHeadCell: FC<TableHeadCellProps> = ({ children }) => {
    return <TableCell>{children}</TableCell>;
};

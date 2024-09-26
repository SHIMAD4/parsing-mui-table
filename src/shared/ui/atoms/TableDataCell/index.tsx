import React, { FC } from 'react';
import { TableCell } from '@mui/material';

interface TableDataCellProps {
    children: React.ReactNode;
}

export const TableDataCell: FC<TableDataCellProps> = ({ children }) => {
    return <TableCell>{children}</TableCell>;
};

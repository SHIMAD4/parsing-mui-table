import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

type RowTypes = {
    [key in string]: string;
}

export const DataTable = ({ jsonData }) => {
    const [filter, setFilter] = useState('');
    const [filteredData, setFilteredData] = useState(jsonData);

    // Оптимизация фильтрации
    const handleFilter = useCallback(() => {
        setFilteredData(
            jsonData.filter(item =>
                Object.values(item).some(val =>
                    val.toString().toLowerCase().includes(filter.toLowerCase())
                )
            )
        );
    }, [filter, jsonData]);

    // Эффект для фильтрации данных при изменении фильтра
    useEffect(() => {
        handleFilter();
    }, [filter, handleFilter]);

    // Оптимизация таблицы с React.memo
    const MemoizedTable = useMemo(() => (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {Object.keys(jsonData[0] || {}).map((key) => (
                            <TableCell key={key}>{key}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredData.map((row: RowTypes, index) => (
                        <TableRow key={index}>
                            {Object.values(row).map((value, idx) => (
                                <TableCell key={idx}>{value}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    ), [filteredData, jsonData]);

    return (
        <div>
            <TextField
                label="Фильтр"
                variant="outlined"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                fullWidth
                margin="normal"
            />
            {MemoizedTable}
        </div>
    );
};

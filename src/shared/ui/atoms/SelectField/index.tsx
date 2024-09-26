import { CSSProperties, FC } from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface SelectFieldProps {
    label: string;
    value: string;
    onChange: (event: SelectChangeEvent) => void;
    options: string[];
    style?: CSSProperties;
}

export const SelectField: FC<SelectFieldProps> = ({ label, value, onChange, options, style }) => {
    return (
        <FormControl style={style}>
            <InputLabel>{label}</InputLabel>
            <Select value={value} onChange={onChange} label={label}>
                <MenuItem value="">
                    <em>Любая</em>
                </MenuItem>
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

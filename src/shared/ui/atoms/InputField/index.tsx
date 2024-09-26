import {FC, ChangeEvent, CSSProperties} from 'react';
import { TextField } from '@mui/material';

interface InputFieldProps {
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    style?: CSSProperties;
    type?: string;
}

export const InputField: FC<InputFieldProps> = ({ label, value, onChange, style, type = 'text' }) => {
    return (
        <TextField
            label={label}
            variant="outlined"
            value={value}
            onChange={onChange}
            style={style}
            type={type}
        />
    );
};

import { FormControl, FormHelperText, InputLabel, MenuItem,Select as MuiSelect } from '@mui/material';
import React from 'react'

export default function Select(props) {
    const { name, label,variant, value,error=null, options, onChange, ...other } = props;
    return (
        
        <FormControl variant={variant || 'outlined'} {...(error && {error:true})} {...other} >
            <InputLabel >{label}</InputLabel>
            <MuiSelect
                name={name}
                value={value}
                label={label}
                onChange={onChange}
            >
                {options.map((option)=>(
                    <MenuItem key={option.id} value={option.id}>{option.title}</MenuItem>
                ))}
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}

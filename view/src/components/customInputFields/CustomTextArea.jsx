import React from 'react';
import { TextArea, InputFieldContainer } from './styles';

const CustomTextArea = ({ placeholder, name, rows, cols, value, onChange }) => {
    return (
        <InputFieldContainer>
            <TextArea placeholder={placeholder} name={name} rows={rows} cols={cols} value={value} onChange={onChange} />
        </InputFieldContainer>
    );
}

export default CustomTextArea;
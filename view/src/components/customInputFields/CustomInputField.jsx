import React from 'react';
import { InputField, InputFieldContainer } from './styles';

const CustomInputField = ({ type, placeholder, name, value, onChange }) => {
    return (
        <InputFieldContainer>
            <InputField type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />
        </InputFieldContainer>
    )
}

export default CustomInputField;
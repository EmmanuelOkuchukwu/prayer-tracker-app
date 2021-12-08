import React from 'react';
import { StyledButton } from './styles';

const Button = ({ type, value, disabled }) => {
    return (
        <StyledButton type={type} value={value} disabled={disabled} />
    );
}

export default Button;

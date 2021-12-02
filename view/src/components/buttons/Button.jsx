import React from 'react';
import { StyledButton } from './styles';

const Button = ({ type, value }) => {
    return (
        <StyledButton type={type} value={value} />
    );
}

export default Button;
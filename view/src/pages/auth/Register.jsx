import React, { useState } from 'react';
import auth from '../../API/auth';
import { Navigate } from 'react-router-dom';
import { RegisterContainer, RegisterBackground, Form } from './styles';
import CustomInputField from '../../components/customInputFields/CustomInputField';
import Button from "../../components/buttons/Button";

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const revealPassword = (evt) => {
        evt.preventDefault();
        setShowPassword(!showPassword);
    }
    if(auth.getCurrentUser()) {
        return <Navigate to={{ pathname: '/dashboard' }} />
    }
    return (
        <RegisterContainer>
            <RegisterBackground>
                <Form>
                    <h3>Register</h3>
                    <label htmlFor="name">Full Name:</label>
                    <CustomInputField type="text" name="name" placeholder="John Doe" /><br />
                    <label htmlFor="email">Email:</label>
                    <CustomInputField type="text" name="email" placeholder="John.Doe@gmail.com" /><br />
                    <label htmlFor="username">Username:</label>
                    <CustomInputField type="text" name="name" placeholder="JohnZ90" /><br />
                    <label htmlFor="password">Password:</label>
                    <CustomInputField type={!showPassword ? "text" : "password"} name="name" placeholder="John Doe" /><br />
                    <a href="" onClick={revealPassword}>Reveal Password</a>
                    <Button type="submit" value="Register" />
                </Form>
            </RegisterBackground>
        </RegisterContainer>
    )
}

export default Register;

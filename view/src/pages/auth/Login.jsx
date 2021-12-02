import React, { useState } from 'react';
import Nav from '../../components/nav/Nav';
import CustomInputField from '../../components/customInputFields/CustomInputField';
import { LoginBackground, LoginContainer, LoginForm } from './styles';
import { StyledButton } from '../../components/buttons/styles';
import auth from '../../API/auth';
import useCurrentUser from "../../hooks/useCurrentUser";

function Login() {
    const initialState = {
        email: '',
        password: ''
    }
    const [loginValues, setLoginValues] = useState(initialState);
    const [showHidePassword, setShowHidePassword] = useState(false);
    function displayPassword(evt) {
        evt.preventDefault();
        setShowHidePassword(!showHidePassword);
    }
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setLoginValues({ ...loginValues, [name]: value });
    }

    const handleLogin = (evt) => {
        evt.preventDefault();
        const formData = {
            email: loginValues.email,
            password: loginValues.password
        }
        auth.onLogin(formData).then((loginResults) => {
            console.log(loginResults);
        }).catch((error) => console.log(error));
    }

    return (
        <LoginContainer>
            <LoginBackground>
                <LoginForm onSubmit={handleLogin}>
                    <h4>Task Manager</h4>
                    <label htmlFor="email">Email<span>*</span></label>
                    <CustomInputField type="text" name="email" value={loginValues.email} onChange={handleChange} placeholder="John.Doe@gmail.com" /><br/>
                    <label htmlFor="password">Password<span>*</span></label>
                    <CustomInputField type={showHidePassword ? "text" : "password"} name="password" value={loginValues.password} onChange={handleChange} placeholder="XXXXXXXXXXXXXXX" />
                    <a href="" className="eye-icon" onClick={displayPassword}>{showHidePassword ? <i className="fas fa-eye" />: <i className="fas fa-eye-slash" />}</a>
                    <StyledButton type="submit" value="Login" />
                </LoginForm>
            </LoginBackground>
        </LoginContainer>
    )
}

export default Login;
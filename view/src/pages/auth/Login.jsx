import React, { useState } from 'react';
import Nav from '../../components/nav/Nav';
import CustomInputField from '../../components/customInputFields/CustomInputField';
import { LoginBackground, LoginContainer, LoginForm, RegisterContainer } from './styles';

function Login() {
    const [showHidePassword, setShowHidePassword] = useState(false);
    function displayPassword(evt) {
        evt.preventDefault();
        setShowHidePassword(!showHidePassword);
    }
    return (
        <LoginContainer>
            <LoginBackground>
                <LoginForm>
                    <h4>Task Manager</h4>
                    <label htmlFor="email">Email:</label>
                    <CustomInputField type="text" name="email" placeholder="John.Doe@gmail.com" /><br/>
                    <label htmlFor="password">Password:</label>
                    <CustomInputField type={showHidePassword ? "text" : "password"} name="password" placeholder="XXXXXXXXXXXXXXX" />
                    <a href="" className="eye-icon" onClick={displayPassword}>{showHidePassword ? <i className="fas fa-eye" />: <i className="fas fa-eye-slash" />}</a>
                </LoginForm>
            </LoginBackground>
        </LoginContainer>
    )
}

export default Login;
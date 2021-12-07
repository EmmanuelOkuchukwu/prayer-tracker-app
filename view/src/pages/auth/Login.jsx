import React, { useState } from 'react';
import Nav from '../../components/nav/Nav';
import CustomInputField from '../../components/customInputFields/CustomInputField';
import { LoginBackground, LoginContainer, LoginForm } from './styles';
import { StyledButton } from '../../components/buttons/styles';
import auth from '../../API/auth';
import { useNavigate, Navigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const initialState = {
        email: '',
        password: ''
    }
    const [loginValues, setLoginValues] = useState(initialState);
    const [showHidePassword, setShowHidePassword] = useState(false);
    const [loading, setLoading] = useState(false);
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
            navigate('/dashboard');
            console.log(loginResults);
        }).catch((error) => console.log(error));
    }

    if(auth.getCurrentUser()) {
        return <Navigate to={{ pathname: '/dashboard' }} />
    }

    return (
        <LoginContainer>
            <h2>
                <i className="fas fa-tasks" /> Task Manager
            </h2>
            <LoginBackground>
                <LoginForm onSubmit={handleLogin}>
                    <h4>Login</h4>
                    <hr />
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

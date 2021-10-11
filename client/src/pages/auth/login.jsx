import React, { useState } from 'react';
import '../../scss/authStyles.scss';
import Form from 'react-bootstrap/Form';
import { Link, useHistory } from 'react-router-dom';
import { AuthService } from '../../service/authService';
import { useAlert } from 'react-alert';

function Login() {
    const history = useHistory();
    const alert = useAlert();
    const initialState = {
        email: '',
        password: ''
    }
    const [loginValue, setLoginValue] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setLoginValue({ ...loginValue, [name]: value });
    }
    const handleLogin = (evt) => {
        evt.preventDefault();
        const formData = {
            email: loginValue.email,
            password: loginValue.password
        }
        AuthService.onLogin(formData).then((result) => {
            console.log(result);
            setLoading(true);
            history.push('/task-center');
            alert.success(`Welcome back ${result?.data?.username}`);
        }, error => {
            console.log(error);
            setLoading(false);
        })
    }
    return(
        <div className="mainContainer">
            <div className="login-wrapper">
                <div className="info">
                    <div>
                        <h2>Welcome to the Task Tracker App</h2>
                        <hr />
                        <ul>
                            <li>
                                <p>Register yourself here <Link to="/register">Get started!</Link> for an account.</p>
                            </li>
                            <li>
                                <p>Login at the other side of the screen for a chance to access your account now!</p>
                            </li>
                            <li>
                                <p>Create, Read, Update and Delete all your tasks using the app.</p>
                            </li>
                            <li>
                                <p>Stay up to date with all your tasks with our handy completed/uncompleted feature.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="login">
                    <Form className="login-form" onSubmit={handleLogin}>
                        <h2>Login</h2>
                        <hr />
                        <Form.Label htmlFor="email" className="input">Email:</Form.Label>
                        <Form.Control type="text" name="email" onChange={handleChange} value={loginValue.email} />
                        <Form.Label htmlFor="password">Password:</Form.Label>
                        <Form.Control type="password" name="password" onChange={handleChange} value={loginValue.password} /><br />
                        <Form.Control type="submit" disabled={loading} value={loading ? 'Loading...' : 'Login'} />
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;
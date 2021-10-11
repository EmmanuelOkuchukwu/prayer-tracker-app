import React from 'react';
import '../../scss/authStyles.scss';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'

function Login() {
    return(
        <div className="mainContainer">
            <div className="login-wrapper">
                <div className="info">
                    <div>
                        <h2>Welcome to the Task Tracker App</h2>
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
                    <Form className="login-form">
                        <h2>Login</h2>
                        <Form.Label htmlFor="email" className="input">Email:</Form.Label>
                        <Form.Control type="text" name="email" />
                        <Form.Label htmlFor="password">Password:</Form.Label>
                        <Form.Control type="password" name="password" /><br />
                        <Form.Control type="submit" value="Login" />
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;
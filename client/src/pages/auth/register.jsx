import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import {AuthService} from "../../service/authService";

function Register() {
    const history = useHistory();

    const initialState = {
        name: '',
        email: '',
        username: '',
        password: ''
    }
    const [registerValue, setRegisterValue] = useState(initialState);
    const handleChange = (evt) => {
        const { name, value } = evt.target
        setRegisterValue({ ...registerValue, [name]: value })
    }
    const inputFields = {
        name: registerValue.name,
        email: registerValue.email,
        username: registerValue.username,
        password: registerValue.password
    }
    function handleRegister(evt) {
        evt.preventDefault();
        AuthService.onRegister(inputFields).then((run) => {
            console.log(run);
            history.push('/profile');
        }, (error) => {
            console.log(error);
        })
    }
    return(
        <div className="register-container">
            <div className="register-background">
                <Form className="register-form" onSubmit={handleRegister}>
                    <h1>Register</h1>
                    <hr />
                    <Form.Label htmlFor="name">Name:</Form.Label>
                    <Form.Control type="text" name="name" value={registerValue.name} onChange={handleChange} />
                    <Form.Label htmlFor="name">Email:</Form.Label>
                    <Form.Control type="text" name="email" value={registerValue.email} onChange={handleChange} />
                    <Form.Label htmlFor="name">Username:</Form.Label>
                    <Form.Control type="text" name="username" value={registerValue.username} onChange={handleChange} />
                    <Form.Label htmlFor="name">Password:</Form.Label>
                    <Form.Control type="password" name="password" value={registerValue.password} onChange={handleChange} /><br />
                    <Form.Control type="submit" value="Register" /><br />
                    <span>Go back to <Button variant="link" onClick={() => history.push('/')}>Login Page</Button></span>
                </Form>
            </div>
        </div>
    )
}

export default Register;

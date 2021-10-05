import React, { useState, useRef } from 'react'
import { TaskService } from '../service/taskService';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useAlert } from 'react-alert';
import SimpleReactValidator from 'simple-react-validator';

function AddTask() {
    const history = useHistory();
    const alert = useAlert();
    const SimpleValidator = useRef(new SimpleReactValidator());
    const initialValue = {
        title: '',
        description: ''
    }
    const [todoData, setTodoData] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(false);
    const [, forceUpdate] = useState();

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setTodoData({ ...todoData, [name]: value });
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(SimpleValidator.current.allValid()) {
            const formData = {
                title: todoData.title,
                description: todoData.description
            }
            TaskService.onCreateTask(formData)
                .then(() => {
                    setIsLoading(true);
                    alert.success('Successfully created new task');
                    history.push('/');
                })
                .catch((e) => {
                    console.log(e)
                    setIsLoading(false);
                });
        } else {
            forceUpdate(1)
            SimpleValidator.current.showMessages();
        }
    }
    return (
        <div className="add-todo-container">
            <div className="add-todos-title">
                <h2>Add task</h2>
                <i className="fas fa-long-arrow-alt-left fa-3x" onClick={() => history.push('/')} />
            </div>
            <div className="main-background-form">
                <Card style={{ width: '35%' }}>
                    <Card.Header>
                        <h3>Add Task</h3>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Control type="text" name="title" value={todoData.title} onChange={handleChange} placeholder="Write your Title here..." />
                            {SimpleValidator.current.message('title', todoData.title, 'required', { className: 'text-danger' })}<br />
                            <Form.Control as="textarea" name="description" value={todoData.description} onChange={handleChange} placeholder="Write your Description here..." rows="4" cols="50" />
                            {SimpleValidator.current.message('description', todoData.description, 'required', { className: 'text-danger' })}<br />
                            <Form.Control type="submit" disabled={isLoading} value={!isLoading ? 'Add Task' : 'Loading...'} />
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default AddTask

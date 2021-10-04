import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { TaskService } from '../service/taskService';
import Card from 'react-bootstrap/Card';
import '../scss/styles.scss';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

function UpdateTask() {
    const initialValue = {
        title: '',
        description: ''
    }
    const [editTodo, setEditTodo] = useState(initialValue);
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        const getTask = () => {
            TaskService.fetchTask(id)
                .then((response) => {
                    setEditTodo(response)
                })
                .catch((error) => console.log(error));
        }
        return getTask();
    }, [])
    function handleChange(evt) {
        const { name, value } = evt.target;
        setEditTodo({ ...editTodo, [name]: value });
    }
    function handleTaskUpdate(evt) {
        evt.preventDefault();
        const formData = {
            title: editTodo?.title,
            description: editTodo?.description
        }
        TaskService.onUpdateTask(id, formData)
        .then((results) => {
            window.alert(`Updated task for id=${id}`);
            console.log(results);
            history.push('/');
        }, (error) => {
            console.log(error);
        });
    }
    function handleDeleteTask() {
        TaskService.onDeleteTasks(id)
            .then((response) => {
                console.log(response);
                history.push('/');
            })
            .catch((error) => console.log(error));
    }
    return(
        <div className="update-task">
            <Card style={{ width: '20%' }}>
                <Card.Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h2>Update Tasks</h2>
                    <Button variant="danger" onClick={handleDeleteTask}>Delete</Button>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleTaskUpdate}>
                        <label htmlFor="title">Title:</label>
                        <Form.Control type="text" name="title" value={editTodo?.title} onChange={handleChange} /><br />
                        <label htmlFor="description">Description:</label>
                        <Form.Control type="text" name="description" value={editTodo?.description} onChange={handleChange} /><br />
                        <Form.Control type="submit" value="Update" variant="success" />
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default UpdateTask;

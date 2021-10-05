import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { TaskService } from '../service/taskService';
import Card from 'react-bootstrap/Card';
import '../scss/styles.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function UpdateTask() {
    const initialValue = {
        title: '',
        description: ''
    }
    const [editTodo, setEditTodo] = useState(initialValue);
    const alert = useAlert();
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
            alert.success(`Updated task for id=${id}`);
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
                alert.success(`You success deleted task ${id}`);
            })
            .catch((error) => console.log(error));
    }
    return(
        <div className="update-task">
            <Card style={{ width: '30%' }}>
                <Card.Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h2>Update Tasks</h2>
                    <Button variant="danger" onClick={handleDeleteTask}>Delete</Button>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleTaskUpdate}>
                        <Form.Label>Title:</Form.Label>
                        <Form.Control type="text" name="title" value={editTodo?.title} onChange={handleChange} /><br />
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea" type="text" name="description" value={editTodo?.description} onChange={handleChange} col="5" rows="5" /><br />
                        <Form.Control type="submit" value="Update" variant="success" />
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default UpdateTask;

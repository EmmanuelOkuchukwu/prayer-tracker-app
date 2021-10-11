import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { TaskService } from '../../service/taskService';
import Card from 'react-bootstrap/Card';
import '../../scss/styles.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function UpdateTask() {
    const initialValue = {
        title: '',
        description: '',
        completed: false
    }
    const [editTodo, setEditTodo] = useState(initialValue);
    const [loading, setLoading] = useState(false);
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
    function handleCompleteTask(status) {
        const formData = {
            title: editTodo?.title,
            description: editTodo?.description,
            completed: status
        }
        TaskService.onUpdateTask(id, formData)
        .then((results) => {
            setEditTodo({ ...editTodo, completed: status })
            console.log(results);
        }, (error) => {
            console.log(error);
        });
    }
    function handleTaskUpdate(evt) {
        evt.preventDefault();
        TaskService.onUpdateTask(id, editTodo)
            .then((results) => {
                alert.success(`Updated task for id=${id}`);
                console.log(results);
                history.push('/');
                setLoading(true);
            }, (error) => {
                console.log(error);
                setLoading(false);
            });
    }
    function handleDeleteTask() {
        TaskService.onDeleteTasks(id)
            .then((response) => {
                console.log(response);
                history.push('/');
                alert.success(`You success deleted task ${id}`);
                setLoading(true);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }
    return(
        <div className="update-task">
            <Card className="task-update">
                <Card.Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h2>Update Tasks</h2>
                    <div>
                        <Button variant="danger" onClick={handleDeleteTask}>Delete</Button>{' '}
                        {!editTodo?.completed ? (
                            <Button variant="secondary" onClick={() => handleCompleteTask(true)}>Done</Button>
                        ) : (
                            <Button variant="danger" onClick={() => handleCompleteTask(false)}>Not Complete</Button>
                        )}
                    </div>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleTaskUpdate}>
                        <Form.Label>Title:</Form.Label>
                        <Form.Control type="text" name="title" value={editTodo?.title} onChange={handleChange} /><br />
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea" type="text" name="description" value={editTodo?.description} onChange={handleChange} col="5" rows="5" /><br />
                        <div><label>Status:</label>{' '}{editTodo?.completed ? <span>Completed</span> : <span>Not Completed</span>}</div>
                        <Form.Control type="submit" value={!loading ? 'Update' : 'Loading...'} variant="success" />
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default UpdateTask;

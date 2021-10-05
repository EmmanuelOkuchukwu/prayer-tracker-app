import React, { useState, useEffect } from 'react';
import { TaskService } from "../service/taskService";
import '../scss/styles.scss';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TaskCenter() {
    const history = useHistory();
    const alert = useAlert();
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        return getTasks()
    }, [])

    function getTasks() {
        TaskService.fetchTasks()
            .then((results) => {
                setTasks(results);
                console.log(results);
                setLoading(true);
            }, (error) => {
                console.log(error);
                setLoading(false);
            })
    }
    function handleDeleteTask(id) {
        if(!window.alert("Are you sure you want to delete your task")) {
            TaskService.onDeleteTasks(id)
                .then((response) => {
                    if(response) {
                        const deleteTask = tasks?.filter(task => {
                            return task._id !== id;
                        });
                        setTasks(deleteTask);
                        alert.success(`Deleted id=${id}`);
                    } else {
                        return null
                    }
                }, (error) => {
                    console.log(error);
                })
        } else {
            return {};
        }
    }

    const refreshList = () => {
        getTasks();
        setTasks(null);
    };

    function handleDeleteAll() {
        if(!window.alert("Are you sure you want to delete all the tasks!")) {
            TaskService.onDeleteAll()
                .then((response) => {
                    console.log(response.data);
                    refreshList();
                    alert.success('All tasks Deleted!');
                })
                .catch(error => console.log(error));
        } else {
            return []
        }
    }
    const displayTasks = <div className="tasks-container">
        {tasks?.length > 0 ? tasks?.map((task) => (
            <Card key={task._id} className="task-card">
                <Card.Header className="task-heading">
                    <h4>{task.title}</h4>
                    <div className="icon-container">
                        <i className="fas fa-trash" onClick={() => handleDeleteTask(task._id)} />
                        <i className="fas fa-edit" onClick={() => history.push(`/update-task/${task._id}`)} />
                    </div>
                </Card.Header>
                <Card.Body>
                    <p>{task.description}</p>
                    <p>{task?.completed}</p>
                    <p>{moment(task.createdAt).format('MMMM Do YYYY')}</p>
                </Card.Body>
            </Card>
        )): <p>No Tasks found!</p>}
    </div>
    return (
        <main className="task-center-container">
            <div className="task-center-wrapper">
                <div className="sub-heading">
                    <h3>Task Center</h3>
                    <div>
                        <Button variant="success" onClick={() => history.push('/add-task')}>Add Task</Button>{' '}
                        <Button variant="danger" onClick={handleDeleteAll}>Delete All</Button>
                    </div>
                </div>
                <hr />
                {loading ?
                    <div>
                        {displayTasks}
                    </div> : <p>Tasks are Loading...</p>
                }
            </div>
        </main>
    )
}

export default TaskCenter;

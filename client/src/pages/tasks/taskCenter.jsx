import React, { useState, useEffect, useContext } from 'react';
import { TaskService } from "../../service/taskService";
import '../../scss/styles.scss';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AuthHeader } from "../../util/authHeader";
import { UserContext } from '../../userInfo';

function TaskCenter() {
    const context = useContext(UserContext)
    const history = useHistory();
    const alert = useAlert();
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log('User:', context?.getUserInfo())
    useEffect(() => {
        return getTasks()
    }, [])

    function getTasks() {
        TaskService.fetchMyTasks()
            .then((results) => {
                setTasks(results.data);
                console.log(results.data);
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
        TaskService.onDeleteAll().then((response) => {
            if(response.status === 200) {
                console.log(response.data);
                refreshList();
                alert.success('All tasks Deleted!');
                console.log(response.status);
            } else if(response.status === 401) {
                alert.error('There is no tasks to be deleted!');
                console.log(response.status);
            }
        }).catch(error => console.log(error));
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
                    <p>Description:</p>
                    <p>{task.description}</p>
                    <hr />
                    <p>Status: {task.completed ? <i className="fas fa-check-circle" /> : <i className="fas fa-times" />}</p>
                    <p>Due Date: {moment(task.dueDate).format('MMMM Do YYYY')}</p>
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

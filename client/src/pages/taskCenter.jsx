import React, { useState, useEffect } from 'react';
import { TaskService } from "../service/taskService";
import '../scss/styles.scss';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

function TaskCenter() {
    const history = useHistory();
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        function getTasks() {
            TaskService.fetchTasks()
            .then((results) => {
                setTasks(results);
                console.log(results);
            }, (error) => {
                console.log(error);
            })
        }
        return getTasks()
    }, [])
    function handleDeleteTask(id) {
        TaskService.onDeleteTasks(id)
            .then((response) => {
                if(response) {
                    const deleteTask = tasks.filter(task => {
                        return task._id !== id;
                    });
                    setTasks(deleteTask);
                } else {
                    return null
                }
            }, (error) => {
                console.log(error);
            })
    }
    const displayTasks = <div className="tasks-container">
        {tasks?.length > 0 ? tasks?.map((task) => (
            <div key={task._id} className="task-card">
                <div className="task-heading">
                    <h4>{task.title}</h4>
                    <div className="icon-container">
                        <i className="fas fa-trash" onClick={() => handleDeleteTask(task._id)} />
                        <i className="fas fa-edit" onClick={() => history.push(`/update-task/${task._id}`)} />
                    </div>
                </div>
                <hr />
                <p>{task.description}</p>
                <p>{moment(task.createdAt).format('MMMM Do YYYY')}</p>
            </div>
        )): <p>No Tasks found!</p>}
    </div>
    return (
        <main className="task-center-container">
            <div className="task-center-wrapper">
                <div className="sub-heading">
                    <h3>Task Center</h3>
                    <i className="fas fa-plus-square fa-2x" onClick={() => history.push('/add-task')} />
                </div>
                <hr />
                {displayTasks}
            </div>
        </main>
    )
}

export default TaskCenter;

import React, { useState, useEffect } from 'react';
import { TaskService } from "../service/taskService";
import '../scss/styles.scss';

function TaskCenter() {
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
            })
    }
    return (
        <main className="task-center-container">
            <div className="task-center-wrapper">
                <div className="sub-heading">
                    <h4>Task Center</h4>
                    <div>Add Task</div>
                </div>
                <hr />
                <div className="tasks-container">
                    {tasks?.length > 0 ? tasks?.map((task) => (
                        <div key={task._id} className="task-card">
                            <div>
                                <h4>{task.title}</h4>
                                <p>{task.description}</p>
                            </div>
                            <div>
                                <button onClick={() => handleDeleteTask(task._id)}>Delete Task</button>
                            </div>
                        </div>
                    )): <p>No Tasks found!</p>}
                </div>
            </div>
        </main>
    )
}

export default TaskCenter;

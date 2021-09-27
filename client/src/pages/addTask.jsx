import React, { useState } from 'react'
import { TaskService } from '../service/taskService';
import { useHistory } from 'react-router-dom';

function AddTask() {
    const history = useHistory();
    const initialValue = {
        title: '',
        description: ''
    }
    const [todoData, setTodoData] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setTodoData({ ...todoData, [name]: value });
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const formData = {
            title: todoData.title,
            description: todoData.description
        }
        TaskService.onCreateTask(formData)
            .then((result) => {
                window.alert('Successfully created new task');
                console.log(result);
                setIsLoading(true);
                history.push('/');
            })
            .catch((e) => {
                console.log(e)
                setIsLoading(false);
            });
    }
    return (
        <div className="add-todo-container">
            <div className="add-todos-title">
                <h2>Add todo</h2>
                <i className="fas fa-long-arrow-alt-left fa-3x" onClick={() => history.push('/')} />
            </div>
            <div className="main-background-form">
                <div className="background">
                    <form className="add-todo-form" onSubmit={handleSubmit}>
                        <h3>Create your Todos</h3>
                        <input className="text-input" type="text" name="title" value={todoData.title} onChange={handleChange} placeholder="Write your Title here..." />
                        <textarea className="text-input" name="description" value={todoData.description} onChange={handleChange} placeholder="Write your Description here..." rows="4" cols="50" />
                        <button className="btn-submit" type="submit" disabled={isLoading}>{!isLoading ? 'Add Todo' : 'Loading...'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTask

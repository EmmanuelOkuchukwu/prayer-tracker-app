import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TaskService } from '../service/taskService';

function UpdateTask() {
    const initialValue = {
        title: '',
        description: ''
    }
    const [editTodo, setEditTodo] = useState(initialValue);
    const { id } = useParams();
    function handleTaskUpdate() {
        const formData = {
            title: editTodo.title,
            description: editTodo.description
        }
        TaskService.onUpdateTask(id, formData)
        .then((results) => {
            window.alert(`Updated task for id=${id}`);
            console.log(results)
        }, (error) => {
            console.log(error);
        });
    }
    return(
        <div></div>
    );
}

export default UpdateTask;
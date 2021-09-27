import axios from 'axios';
import { ReactKey } from '../react-key';

const API_URL = ReactKey.API_URL;

async function onCreateTask(formData) {
    try {
        const response = await axios.post(`${API_URL}/api/tasks/createtasks`, formData, {
            'Content-Type': 'application/json'
        })
        return response.data
    } catch(e) {
        console.log(e)
    }
}

async function fetchTasks() {
    try {
        const response = await axios.get(`${API_URL}/api/tasks/gettasks`)
        return response.data;
    } catch(e) {
        console.log(e)
    }
}

async function onDeleteTasks(id) {
    try {
        const response = await axios.delete(`${API_URL}/api/tasks/deletetask/${id}`)
        return response.data
    } catch(e) {
        console.log(e)
    }
}

export const TaskService = {
    fetchTasks,
    onDeleteTasks,
    onCreateTask
}

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

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
    onDeleteTasks
}
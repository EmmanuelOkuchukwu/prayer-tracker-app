import axios from 'axios';
import { ReactKey } from '../react-key';
import { AuthHeader } from '../util/authHeader';

const API_URL = ReactKey.API_URL;
// const API_URL = process.env.REACT_APP_API_URL;
const token = JSON.parse(localStorage.getItem('user'));

const AuthorizationHeader = AuthHeader()
AuthorizationHeader['Content-type'] = 'application/json'

async function onCreateTask(formData) {
    try {
        const response = await axios.post(`${API_URL}/api/tasks/createtasks`, formData, {
            headers: AuthorizationHeader
        });
        return response
    } catch(e) {
        console.log(e);
    }
}

async function fetchTasks() {
    try {
        const response = await axios.get(`${API_URL}/api/tasks/gettasks`, {
            headers: AuthHeader()
        });
        return response;
    } catch(e) {
        console.log(e)
    }
}

async function fetchTask(id) {
    try {
        const result = await axios.get(`${API_URL}/api/tasks/gettask/${id}`, {
            headers: AuthHeader()
        });
        return result.data;
    } catch(e) {
        console.log(e)
    }
}

async function fetchMyTasks() {
    try {
        const result = await axios.get(`${API_URL}/api/tasks/readMyTasks`, {
            headers: AuthHeader()
        })
        return result;
    } catch(e) {

    }
}

async function onUpdateTask(id, formData) {
    try {
        const response = await axios.put(`${API_URL}/api/tasks/updatetask/${id}`, formData, {
            headers: AuthorizationHeader
        });
        return response.data;
    } catch(e) {
        console.log(e);
    }
}

async function onDeleteAll() {
    try {
        const response = await axios.delete(`${API_URL}/api/tasks/deletetasks`, {
            headers: AuthHeader()
        });
        return response
    } catch(e) {
        console.log(e);
    }
}

async function onDeleteTasks(id) {
    try {
        const response = await axios.delete(`${API_URL}/api/tasks/deletetask/${id}`, {
            headers: AuthHeader()
        });
        return response.data
    } catch(e) {
        console.log(e)
    }
}

export const TaskService = {
    fetchTasks,
    fetchTask,
    fetchMyTasks,
    onDeleteTasks,
    onDeleteAll,
    onCreateTask,
    onUpdateTask
}

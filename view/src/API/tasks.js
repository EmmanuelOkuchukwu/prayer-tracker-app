import axios from 'axios';
import { AuthHeader } from '../AuthHeader';

const API_URL = process.env.REACT_APP_API_URL;

const Authorization = AuthHeader();
Authorization['Content-Type'] = 'application/json';

const tasks = {
    getMyTasks: () => {
        return axios.get(`${API_URL}/api/tasks/readMyTasks`, {
            headers: AuthHeader()
        }).then((response) => {
            return response
        })
    },
    onCreateTasks: (formData) => {
        return axios({
            method: 'POST',
            url: `${API_URL}/api/tasks/createtasks`,
            headers: Authorization,
            data: formData
        }).then((response) => {
            return response
        })
    },
    getTask: (id) => {
        return axios.get(`${API_URL}/api/tasks/gettask/${id}`, {
            headers: AuthHeader()
        }).then((response) => {
            return response;
        })
    },
    onUpdateTask: (id, formData) => {
        return axios({
            method: "PUT",
            url: `${API_URL}/api/tasks/updatetask/${id}`,
            headers: Authorization,
            data: formData
        }).then((response) => {
            return response;
        })
    },
    onDeleteTask: (id) => {
        return axios({
            method: "DELETE",
            url: `${API_URL}/api/tasks/deletetask/${id}`,
            headers: AuthHeader()
        }).then((response) => {
            return response;
        })
    },
}

export default tasks;
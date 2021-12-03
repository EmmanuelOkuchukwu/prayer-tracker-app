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
    getTask: () => {},
    onDeleteTask: () => {},
    onUpdateTask: () => {},
}

export default tasks;
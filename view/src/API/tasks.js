import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const user = JSON.parse(localStorage.getItem('jwt'));

const tasks = {
    getMyTasks: () => {
        return axios.get(`${API_URL}/api/tasks/readMyTasks`, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }).then((response) => {
            return response
        })
    },
    getTask: () => {},
    onCreateTasks: () => {},
    onDeleteTask: () => {},
    onUpdateTask: () => {},
}

export default tasks;
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const auth = {
    onLogin: (formData) => {
        return axios.post(`${API_URL}/auth/v1/login`, formData, {
            headers: {
                'content-type': 'application/json'
            }
        }).then((response) => {
            if(response.data.token) {
                localStorage.setItem('jwt', JSON.stringify(response.data));
            }
            return response;
        })
    },
    onRegister: () => {},
    onLogout: () => {
        return localStorage.removeItem('jwt');
    },
    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem('jwt'))
    }
}

export default auth;
import { BehaviorSubject } from 'rxjs';
import axios from 'axios';
// import { ReactKey } from '../react-key';

// const API_URL = ReactKey.API_URL;
const API_URL = process.env.REACT_APP_API_URL;

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')));

function onLogin(formData) {
    return axios.post(`${API_URL}/auth/v1/login`, formData, {
        headers: {
            "content-type": "application/json"
        }
    }).then((response) => {
        if(response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
            currentUserSubject.next(response.data);
        }
        return response.data;
    })
}

function onLogout() {
    localStorage.clear()
    currentUserSubject.next(null);
}

export const AuthService = {
    onLogin,
    onLogout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value
    }
}
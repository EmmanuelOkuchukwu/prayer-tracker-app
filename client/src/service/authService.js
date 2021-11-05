import { BehaviorSubject } from 'rxjs';
import axios from 'axios';
import { removeUserInfo, setUserInfo } from '../util/localStorageUtil';
import { ReactKey } from '../react-key';

const API_URL = ReactKey.API_URL;
// const API_URL = process.env.REACT_APP_API_URL;

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')));

function onLogin(formData) {
    return axios.post(`${API_URL}/auth/v1/login`, formData, {
        headers: {
            "content-type": "application/json"
        }
    }).then((response) => {
        if(response.data.token) {
            setUserInfo(response.data);
            currentUserSubject.next(response.data);
        }
        return response.data;
    })
    // .catch(error => console.log(error));
}

function onLogout() {
    removeUserInfo()
    currentUserSubject.next(null);
}

function onRegister(inputFields) {
    return axios.post(`${API_URL}/auth/v1/register`, inputFields, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if(response.data.token) {
            setUserInfo(response.data);
            currentUserSubject.next(response.data);
        }
        return response;
    }).catch((error) => console.log(error));
}

export const AuthService = {
    onLogin,
    onLogout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value
    },
    onRegister
}

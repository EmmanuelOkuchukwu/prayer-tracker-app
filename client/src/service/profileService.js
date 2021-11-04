import axios from 'axios';
import { ReactKey } from '../react-key';
import { AuthHeader } from "../util/authHeader";

const API_URL = ReactKey.API_URL;

const AuthenticationHeader = AuthHeader();
AuthenticationHeader['Content-Type'] = 'application/json';

function getProfile() {
    return axios.get(`${API_URL}/api/profile/me`, {
        headers: AuthHeader()
    })
        .then((response) => {
            return response
        })
}

function onCreateProfile(input) {
    return axios.post(`${API_URL}/api/profile/createprofile`, input, {
        headers: AuthenticationHeader
    })
        .then((response) => {
            return response
        })
}

export const ProfileService = {
    getProfile,
    onCreateProfile
}

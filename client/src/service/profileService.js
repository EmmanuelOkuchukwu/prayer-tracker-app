import axios from 'axios';
import { ReactKey } from '../react-key';
import { AuthHeader } from "../util/authHeader";

const API_URL = ReactKey.API_URL;

function getProfile() {
    return axios.get(`${API_URL}/api/profile/me`, {
        headers: AuthHeader()
    })
        .then((response) => {
            return response
        })
}

export const ProfileService = {
    getProfile
}
import axios from 'axios';
import { ReactKey } from '../react-key';

const API_URL = ReactKey.API_URL;

function getProfile() {
    return axios.get(`${API_URL}/api/profile/getMyProfile`)
        .then((response) => {
            return response
        })
}

export const ProfileService = {
    getProfile
}
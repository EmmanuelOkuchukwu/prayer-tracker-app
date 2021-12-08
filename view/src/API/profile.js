import axios from 'axios';
import { AuthHeader } from '../AuthHeader';

const API_URL = process.env.REACT_APP_API_URL;

const profile = {
    getMe: () => {
        return axios.get(`${API_URL}/api/profile/me`, {
            headers: AuthHeader()
        }).then((response) => {
            return response;
        })
    },
    onCreateProfile: () => {},
    onDeleteProfile: () => {},
}

export default profile;

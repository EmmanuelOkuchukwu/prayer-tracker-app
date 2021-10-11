import { AuthService } from "../service/authService";

export const AuthHeader = () => {
    const jwt = JSON.parse(localStorage.getItem('user'));
    if(jwt) {
        return { Authorization: `Bearer ${jwt.token}` };
    } else {
        return {}
    }
}
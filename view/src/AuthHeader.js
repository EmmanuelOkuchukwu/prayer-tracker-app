import auth from './API/auth';

export const AuthHeader = () => {
    const user = auth.getCurrentUser();
    if(user?.token) {
        return { Authorization: `Bearer ${user?.token}` }
    } else {
        return {}
    }
}
import { useState, useEffect } from 'react';
import auth from '../API/auth';

const useCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState({})
    const userInfo = auth.getCurrentUser();
    useEffect(() => {
        const getCurrentUser = () => {
            setCurrentUser(userInfo)
        }
        return getCurrentUser()
    }, [])
    return { currentUser }
}

export default useCurrentUser;

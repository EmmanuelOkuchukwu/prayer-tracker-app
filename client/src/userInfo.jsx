import React, { useState, useEffect, createContext } from 'react';
import { AuthService } from './service/authService';

export const UserContext = createContext();
const UserInfo = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        return getUserInfo()
    }, [])
    function getUserInfo() {
        AuthService.currentUser.subscribe(value => {
            setUser(value);
        })
        return user
    }
    return (
        <UserContext.Provider value={{ getUserInfo }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserInfo;
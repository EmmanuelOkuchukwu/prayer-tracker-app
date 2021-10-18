export const setUserInfo = (user) => {
    return localStorage.setItem('user', JSON.stringify(user));
}

export const removeUserInfo = () => {
    return localStorage.removeItem('user');
}
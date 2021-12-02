import React from 'react';
import { NavbarWrapper, UnorderedList } from './styles';
import auth from '../../API/auth';
import { useNavigate } from 'react-router-dom';

const Nav = ({ currentUser }) => {
    const navigate = useNavigate();
    function handleLogout(evt) {
        evt.preventDefault();
        auth.onLogout();
        navigate('/');
    }
    return (    
        <NavbarWrapper>
            <h2>Task Manager</h2>
            <UnorderedList>
                {!currentUser ? (
                        <li><a href="/register">Register</a></li> &&
                        <li><a href="/login">Login</a></li>
                ) : (
                    <span className="img-button">
                        <img src={currentUser?.avatar} className="profile-img" alt="" width="600" height="400" onClick={handleLogout} />
                    </span>
                )}
            </UnorderedList>
        </NavbarWrapper>
    );
}

export default Nav;
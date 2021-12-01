import React from 'react';
import { NavbarWrapper, UnorderedList } from './styles';

const Nav = () => {
    return (    
        <NavbarWrapper>
            <h2>Task Manager</h2>
            <UnorderedList>
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Login</a></li>
            </UnorderedList>
        </NavbarWrapper>
    );
}

export default Nav;
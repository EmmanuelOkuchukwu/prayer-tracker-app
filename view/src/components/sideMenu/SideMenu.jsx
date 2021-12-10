import React from 'react';
import { MenuContainer } from './styles';

const SideMenu = () => {
    return (
        <MenuContainer>
            <div style={{ marginLeft: '30px', display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                <h2>Menu</h2>
                <a href="/dashboard">Dashboard</a>
                <a href="/profile">Profile</a>
                <a href="">Logout</a>
            </div>
        </MenuContainer>
    );
}

export default SideMenu;

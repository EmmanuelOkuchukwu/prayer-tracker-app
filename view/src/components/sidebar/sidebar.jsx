import React from 'react';
import { SidebarContainer, LinkBtn } from './styles';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <ul>
                <h3>Menu</h3><br/>
                <li><LinkBtn href="/dashboard">Home</LinkBtn></li><br/>
                <li><LinkBtn href="/create-task">Add Task</LinkBtn></li>
                <br/>
                <li><LinkBtn href="">Profile</LinkBtn></li>
            </ul>
        </SidebarContainer>
    );
}

export default Sidebar;
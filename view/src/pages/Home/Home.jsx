import React from 'react';
import { HomeHeader } from './styles';
import TaskIcon from '../../assets/completed-task.png';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    return (
        <HomeHeader>
            <div className="main-head">
                <div className="icon-container">
                    <img src={TaskIcon} alt="img" className="task-icon" width="600" height="400" />
                </div>
                <div className="title-container">
                    <h1>Task Manager</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos et facilis hic optio similique?</p>
                </div>
            </div>
            <div className="menu-container">
                <button className="btn-get-started" onClick={() => navigate('/register')}>Get Started!</button>{' '}
                <button className="btn-get-started" onClick={() => navigate('/login')}>Login</button>
            </div>
        </HomeHeader>
    );
}

export default Home;

import React, { useState, useEffect } from 'react';
import useCurrentUser from '../../hooks/useCurrentUser';
import Nav from '../../components/nav/Nav';
import { DashboardContainer, TaskContainer } from './styles';
import tasks from '../../API/tasks';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../../components/sideMenu/SideMenu';
import Card from '../../components/card/Card';
import CreateTaskModal from '../../components/modals/CreateTaskModal';
import { motion } from 'framer-motion';

function Dashboard() {
    const navigate = useNavigate();
    const { currentUser } = useCurrentUser();
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    // useEffect(() => {}, [])

    const showModal = () => setShow(!show);
    // const displayTasks = taskData?.length > 0 ? taskData?.map(task => (
    //     <Card task={task} handleDeleteTask={handleDeleteTask} />
    // )): <p className="tasks-not-found">No tasks found in Database!</p>
    return (
        <DashboardContainer>
            <Nav />
            <SideMenu />
            <header className="dashboard-header">
                <div className="welcome-container">
                    <span className="text-welcome">
                        <h2>Dashboard</h2>
                        <h4>Welcome Back, {currentUser?.email}</h4>
                    </span>
                    <div className="btn-create-wrapper">
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="create-task-btn" onClick={showModal}>Create Prayer</motion.button>
                    </div>
                </div>
            </header>
            <div className="create-btn-container">
                <CreateTaskModal show={show} showModal={showModal} />
            </div>
            {!loading ?
                <TaskContainer>
                    {/*{displayTasks}*/}
                </TaskContainer> : <p style={{ margin: '0 200px' }}>Tasks are loading...</p>
            }
        </DashboardContainer>
    );
}

export default Dashboard;

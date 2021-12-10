import React, { useState, useEffect } from 'react';
import useCurrentUser from '../../hooks/useCurrentUser';
import Nav from '../../components/nav/Nav';
import { DashboardContainer, TaskContainer } from './styles';
import tasks from '../../API/tasks';
import moment from 'moment';
import TaskPanel from '../../components/panel/TaskPanel';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../../components/sideMenu/SideMenu';
import Card from '../../components/card/Card';

function Dashboard() {
    const { currentUser } = useCurrentUser();
    const [taskData, setTaskData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        return getTasks();
    }, [])
    const getTasks = () => {
        setLoading(true);
        tasks.getMyTasks().then((results) => {
            setTaskData(results.data);
            console.log(results.data);
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            console.log(error);
        })
    }
    const displayTasks = taskData?.length > 0 ? taskData?.map(task => (
        <Card task={task} />
    )): <p className="tasks-not-found">No tasks found in Database!</p>
    return (
        <DashboardContainer>
            <Nav />
            <SideMenu />
            <header className="dashboard-header">
                <div style={{ margin: '20px 0' }}>
                    <h2>Dashboard</h2>
                    <h4>Welcome Back, {currentUser?.username}</h4>
                </div>
            </header>
            {!loading ?
                <TaskContainer>
                    {displayTasks}
                </TaskContainer> : <p style={{ margin: '0 200px' }}>Tasks are loading...</p>
            }
        </DashboardContainer>
    );
}

export default Dashboard;

import React, { useState, useEffect } from 'react';
import useCurrentUser from '../../hooks/useCurrentUser';
import Nav from '../../components/nav/Nav';
import { DashboardContainer, TaskContainer } from './styles';
import tasks from '../../API/tasks';
import moment from 'moment';
import TaskPanel from "../../components/panel/TaskPanel";
import Sidebar from "../../components/sidebar/sidebar";

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
        <TaskPanel task={task} />
    )): <p className="tasks-not-found">No tasks found in Database!</p>
    return (
        <DashboardContainer>
            <Nav />
            <TaskContainer>
                <Sidebar />
                <div style={{ width: '100%' }}>
                    <div className="task-sub-heading">
                        <h3>{currentUser?.username}'s Tasks</h3>
                        <button className="btn-add"><i className="fas fa-plus" /></button>
                    </div>
                    <hr />
                    {!loading ?
                        <div>
                            {displayTasks}
                        </div> : <p>Tasks are Loading...</p>
                    }
                </div>
            </TaskContainer>
        </DashboardContainer>
    );
}

export default Dashboard;
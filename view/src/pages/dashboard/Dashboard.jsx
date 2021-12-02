import React from 'react';
import useCurrentUser from '../../hooks/useCurrentUser';
import Nav from '../../components/nav/Nav';
import { DashboardContainer } from './styles';

function Dashboard() {
    const { currentUser } = useCurrentUser();
    return (
        <DashboardContainer>
            <Nav currentUser={currentUser} />
        </DashboardContainer>
    );
}

export default Dashboard;
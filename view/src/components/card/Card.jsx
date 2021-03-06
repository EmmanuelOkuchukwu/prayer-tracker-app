import React from 'react';
import { StyledCard, StyledCardBody, StyledCardheader } from './styles';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const Card = ({ task, handleDeleteTask }) => {
    const navigate = useNavigate();
    return (
        <StyledCard key={task?._id}>
            <StyledCardheader>
                <h2>{task?.title}</h2>
                <span>
                    <i className="fas fa-trash" onClick={() => handleDeleteTask(task._id) } />{' '}
                    <i className="far fa-edit" onClick={() => navigate(`/update-task/${task?._id}`)} />
                </span>
            </StyledCardheader>
            <hr />
            <StyledCardBody>
                <p>{task?.description}</p>
                <p>Date Due: {moment(task?.dueDate).format('MM-DD-YYYY')}</p>
                <hr />
                <p>Updated On: {moment(task?.updatedAt).format('MM-DD-YYYY')}</p>
            </StyledCardBody>
        </StyledCard>
    );
}

export default Card;

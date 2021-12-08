import React from 'react';
import { Panel } from './styles';
import moment from 'moment';

const TaskPanel = ({ task }) => {
    return (
        <Panel href={`update-task/${task._id}`}>
            <span style={{ display: 'flex', alignItems: 'center', gridGap: '10px' }}>
                {/*<i className="fas fa-trash" />*/}
                <h4>{task?.title}</h4>
            </span>
            <span style={{ display: 'flex', gridGap: '10px' }}>
                <p>{moment(task?.createdAt).format('MMMM Do')}</p>
                <p>{task?.completed ? <i className="fas fa-check-circle" /> : <i className="fas fa-times" />}</p>
            </span>
        </Panel>
    );
}

export default TaskPanel;
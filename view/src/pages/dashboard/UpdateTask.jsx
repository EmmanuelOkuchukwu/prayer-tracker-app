import React, { useState, useEffect } from 'react';
import { FormWrapper, DashboardContainer, TaskContainer } from './styles';
import Nav from '../../components/nav/Nav';
import Sidebar from '../../components/sidebar/sidebar';
import CustomInputField from '../../components/customInputFields/CustomInputField';
import CustomTextArea from '../../components/customInputFields/CustomTextArea';
import { useParams, useNavigate } from 'react-router-dom';
import tasks from '../../API/tasks';
import Button from "../../components/buttons/Button";

function UpdateTask() {
    const navigate = useNavigate();
    const initialValues = {
        title: '',
        description: '',
        dueDate: '',
        completed: false
    }
    const [updateState, setUpdateState] = useState(initialValues);
    const { id } = useParams();
    console.log(id)
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setUpdateState({ ...updateState, [name]: value });
    }
    function getTask() {
        tasks.getTask(id).then((results) => {
            setUpdateState(results.data);
        }).catch((error) => console.log(error));
    }
    useEffect(() => {
        return getTask();
    }, [])
    function handleUpdateTask(evt) {
        evt.preventDefault();
        tasks.onUpdateTask(id).then((results) => {
            console.log(results.data);
            console.log('Updated Successfully!');
        }).catch((error) => console.log(error));
    }
    function handleUpdateStatus(status) {
        const formData = {
            title: updateState?.title,
            description: updateState?.description,
            dueDate: updateState?.dueDate,
            completed: status
        }
        tasks.onUpdateTask(id, formData).then((results) => {
            console.log(results.data);
        }).catch((error) => console.log(error));
    }
    function handleDeleteTask() {
        tasks.onDeleteTask(id).then((results) => {
            navigate('/dashboard');
            console.log(results.data);
        }).catch((error) => console.log(error));
    }
    return (
        <>
            <Nav />
            <DashboardContainer>
                <TaskContainer>
                    <Sidebar />
                    <FormWrapper onSubmit={handleUpdateTask}>
                        <span className="update-header-section">
                            <h3>Update Task</h3>
                            <i className="fas fa-trash" onClick={() => handleDeleteTask(id)} />
                        </span>
                        <CustomInputField type="text" name="title" placeholder="Your Title" value={updateState?.title} onChange={handleChange} /><br />
                        <CustomTextArea rows="10" cols="50" type="text" name="description" value={updateState?.description} onChange={handleChange} /><br />
                        <CustomInputField type="date" name="dueDate" value={updateState?.dueDate} onChange={handleChange} /><br />
                        <Button type="submit" value="Update Task" /> <br /><br />
                        {!updateState?.completed ? <a href="" onClick={() => handleUpdateStatus(true)}>Completed</a> : <a href="" onClick={() => handleUpdateStatus(false)}>Not Completed</a>}
                    </FormWrapper>
                </TaskContainer>
            </DashboardContainer>
        </>
    );
}

export default UpdateTask;
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
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setUpdateState({ ...updateState, [name]: value });
    }
    return (
        <>
            <Nav />
            <DashboardContainer>
                <TaskContainer>
                    <Sidebar />
                    <FormWrapper>
                        <span className="update-header-section">
                            <h3>Update Task</h3>
                        </span>
                        <CustomInputField type="text" name="title" placeholder="Your Title" value={updateState?.title} onChange={handleChange} /><br />
                        <CustomTextArea rows="10" cols="50" type="text" name="description" value={updateState?.description} onChange={handleChange} /><br />
                        <CustomInputField type="date" name="dueDate" value={updateState?.dueDate} onChange={handleChange} /><br />
                        <Button type="submit" value="Update Task" /> <br /><br />
                    </FormWrapper>
                </TaskContainer>
            </DashboardContainer>
        </>
    );
}

export default UpdateTask;

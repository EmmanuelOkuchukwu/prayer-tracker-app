import React from 'react';
import { FormWrapper, DashboardContainer, TaskContainer } from './styles';
import Nav from '../../components/nav/Nav';
import Sidebar from '../../components/sidebar/sidebar';
import CustomInputField from '../../components/customInputFields/CustomInputField';
import CustomTextArea from '../../components/customInputFields/CustomTextArea';

function UpdateTask() {
    return (
        <>
            <Nav />
            <DashboardContainer>
                <TaskContainer>
                    <Sidebar />
                    <FormWrapper>
                        <h3>Update Task</h3>
                        <CustomInputField type="text" name="title" placeholder="Your Title" /><br />
                        <CustomTextArea rows="10" cols="50" type="text" name="description" /><br />
                        <CustomInputField type="date" name="dueDate" />
                    </FormWrapper>
                </TaskContainer>
            </DashboardContainer>
        </>
    );
}

export default UpdateTask;
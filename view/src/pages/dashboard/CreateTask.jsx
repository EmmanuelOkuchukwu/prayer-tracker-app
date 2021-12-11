// import React, { useState } from 'react';
// import { DashboardContainer, TaskContainer, FormWrapper } from './styles';
// import Nav from '../../components/nav/Nav';
// import useCurrentUser from '../../hooks/useCurrentUser';
// import CustomInputField from '../../components/customInputFields/CustomInputField';
// import Sidebar from '../../components/sidebar/sidebar';
// import { TextArea } from '../../components/customInputFields/styles';
// import tasks from '../../API/tasks';
//
// function CreateTask() {
//     const initialValues = {
//         title: '',
//         description: '',
//         dueDate: '',
//     }
//     const [initialState, setInitialState] = useState(initialValues);
//     const { currentUser } = useCurrentUser();
//     function handleCreateTask(evt) {
//         evt.preventDefault();
//         const formData = {
//             title: initialState.title,
//             description: initialState.description,
//             dueDate: initialState.dueDate
//         }
//         tasks.onCreateTasks(formData).then((response) => {
//             console.log(response.data);
//         }).catch((error) => console.log(error));
//     }
//     const handleChange = (evt) => {
//         const { name, value } = evt.target;
//         setInitialState({ ...initialState, [name]: value });
//     }
//     return (
//         <>
//             <Nav currentUser={currentUser} />
//             <DashboardContainer>
//                 <TaskContainer>
//                     <Sidebar />
//                     <FormWrapper onSubmit={handleCreateTask}>
//                         <h3>Create New Task</h3>
//                         <CustomInputField type="text" name="title" placeholder="Enter the Title of your Task" value={initialState.title} onChange={handleChange} /><br/>
//                         <TextArea rows="10" cols="50" type="text" name="description" placeholder="Enter the body of your Task" value={initialState.description} onChange={handleChange} /><br/>
//                         <CustomInputField type="date" name="dueDate" value={initialState.dueDate} onChange={handleChange} /><br/>
//                         <button type="submit" className="create-btn">Create Task</button>
//                     </FormWrapper>
//                 </TaskContainer>
//             </DashboardContainer>
//         </>
//     );
// }
//
// export default CreateTask;

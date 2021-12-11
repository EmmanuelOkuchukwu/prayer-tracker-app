import React, { useState } from 'react';
import { ModalBackground, FormWrapper } from './styles';
import CustomInputField from '../customInputFields/CustomInputField';
import { TextArea } from '../customInputFields/styles';
import useCurrentUser from '../../hooks/useCurrentUser';
import tasks from '../../API/tasks';
import { motion } from 'framer-motion';

const CreateTaskModal = ({ show, showModal }) => {
    const initialValues = {
        title: '',
        description: '',
        dueDate: '',
    }
    const [initialState, setInitialState] = useState(initialValues);
    const { currentUser } = useCurrentUser();
    function handleCreateTask(evt) {
        evt.preventDefault();
        const formData = {
            title: initialState.title,
            description: initialState.description,
            dueDate: initialState.dueDate
        }
        tasks.onCreateTasks(formData).then((response) => {
            console.log(response.data);
            showModal()
        }).catch((error) => console.log(error));
    }
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setInitialState({ ...initialState, [name]: value });
    }

    const modalContent = show ? 'modal display-block' : 'modal display-none';

    const gifYouUp = {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2,
                ease: "easeIn",
            },
        },
        exit: {
            opacity: 0,
            scale: 0,
            transition: {
                duration: 0.15,
                ease: "easeOut",
            },
        },
    };
    return (
        <ModalBackground
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={modalContent}>
                <motion.div className="main-modal"
                    variant={gifYouUp}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className="modal-header">
                        <h3>Create New Task</h3>
                        <i className="fas fa-times" onClick={showModal} />
                    </div>
                    <hr />
                    <FormWrapper onSubmit={handleCreateTask}>
                        <CustomInputField type="text" name="title" placeholder="Enter the Title of your Task" value={initialState.title} onChange={handleChange} /><br/>
                        <TextArea rows="10" cols="50" type="text" name="description" placeholder="Enter the body of your Task" value={initialState.description} onChange={handleChange} /><br/>
                        <CustomInputField type="date" name="dueDate" value={initialState.dueDate} onChange={handleChange} /><br/>
                        <button type="submit" className="create-btn">Create Task</button>
                    </FormWrapper>
                </motion.div>
            </div>
        </ModalBackground>
    );
}

export default CreateTaskModal;

import React, { useState } from 'react';
import '../../scss/profile.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ProfileService } from '../../service/profileService';

const CreateProfileForm = ({ handleShowHide }) => {
    const dataValue = {
        bio: '',
        age: '',
        occupation: ''
    }
    const [inputValue, setInputValue] = useState(dataValue);
    const [loading, setLoading] = useState(false);
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setInputValue({ ...inputValue, [name]: value });
    }
    const handleCreateProfile = (evt) => {
        evt.preventDefault();
        const input = {
            age: inputValue.age,
            occupation: inputValue.occupation,
            bio: inputValue.bio
        }
        ProfileService.onCreateProfile(input).then((run) => {
            console.log(run.data)
        }).catch((error) => console.log(error));
    }
    return (
        <div className="form-background">
            <Form onSubmit={handleCreateProfile}>
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" name="age" value={inputValue.age} onChange={handleChange} />
                <Form.Label>Occupation</Form.Label>
                <Form.Control type="text" name="occupation" value={inputValue.occupation} onChange={handleChange} />
                <Form.Label>Write your bio</Form.Label>
                <Form.Control as="textarea" name="bio" value={inputValue.bio} onChange={handleChange} /><br />
                <Form.Control type="submit" value="Create Profile" />
                <Button variant="link" onClick={handleShowHide}>Back to Profile</Button>
            </Form>
        </div>
    )
}

export default CreateProfileForm;

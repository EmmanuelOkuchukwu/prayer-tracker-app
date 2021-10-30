import React, { useState, useEffect } from 'react';
import '../../scss/profile.scss';
import { AuthService } from '../../service/authService';
import Button from 'react-bootstrap/Button';

function Profile() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        AuthService.currentUser.subscribe(x => {
            setUser(x)
        })
    }, [])
    return (
        <div className="profile-container">
            <div className="profile-wrapper">
                <div className="profile-header">
                    <h1>Profile</h1>
                    <Button variant="success">Edit Profile</Button>
                </div>
                <hr />
                <div className="avatar-container">
                    <img src={user?.avatar} alt="" className="profile-avatar" />
                </div>
            </div>
        </div>
    );
}

export default Profile;

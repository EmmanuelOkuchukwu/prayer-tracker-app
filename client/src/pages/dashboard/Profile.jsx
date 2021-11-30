import React, { useState, useEffect } from 'react';
import '../../scss/profile.scss';
import { AuthService } from '../../service/authService';
import { ProfileService } from '../../service/profileService';
import Button from 'react-bootstrap/Button';
import CreateProfileForm from "./createProfileForm";

function Profile() {
    const [user, setUser] = useState(null);
    const [showForm, setShowFrom] = useState(false);
    useEffect(() => {
        // AuthService.currentUser.subscribe(x => {
        //     setUser(x)
        // })
    function fetchProfile() {
        ProfileService.getProfile()
            .then((results) => {
                if(results.status === 200) {
                    setUser(results.data)
                    console.log(results.data)
                }
            })
    }
    return fetchProfile()
    }, [])
    const handleShowHide = () => setShowFrom(!showForm)
    return (
        <div className="profile-container">
            <div className="profile-wrapper">
                <div className="profile-header">
                    <h1>Profile</h1>
                    {/*{user? <Button variant="success">Edit Profile</Button> : ''}*/}
                </div>
                <hr />
                {user ? (
                    <div>
                        <div className="avatar-container">
                            <img src={user?.owner?.avatar} alt="" className="profile-avatar" />
                        </div>
                        <span>
                            <p>Full Name: {user?.owner?.name}</p>
                        </span>
                        <hr />
                        <span>
                            <p>Biography: {user?.bio}</p>
                        </span>
                        <hr />
                        <span>
                            <p>Job Title: {user?.occupation}</p>
                        </span>
                        <hr />
                        <span>
                            <p>Your Age: {user?.age}</p>
                        </span>
                    </div>
                ) : (
                    <div className="button-section">
                        {!showForm ? <Button onClick={handleShowHide}>Create your Profile</Button> : (
                            <CreateProfileForm handleShowHide={handleShowHide} />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;

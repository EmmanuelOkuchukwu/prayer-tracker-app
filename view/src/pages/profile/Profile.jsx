import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/Nav';
import Sidebar from '../../components/sidebar/sidebar';
import { ProfileContainer, MainContainer } from '../profile/styles';
import profile from "../../API/profile";

function Profile() {
    const [profileData, setProfileData] = useState(null);
    const [showFormBtn, setShowFormBtn] = useState(false);
    useEffect(() => {
        return getUserProfile();
    }, []);
    function getUserProfile() {
        profile.getMe().then((results) => {
            setProfileData(results.data);
        }).catch((error) => console.log(error));
    }
    function revealForm() {
        setShowFormBtn(!showFormBtn);
    }
    return (
        <ProfileContainer>
            <Nav />
            <MainContainer>
                <div style={{ width: '100%' }}>
                    <div className="task-sub-heading">
                        <h3>Profile</h3>
                    </div>
                    <div className="profile-container">
                        {profileData ? (
                            <div>
                                <div className="profile-img-container">
                                    <img className="profile-img" src={profileData?.owner?.avatar} alt="" width="600" height="400" />
                                </div>
                                <hr />
                                <h2>{profileData?.owner?.name}</h2>
                                <p>{profileData?.bio}</p>
                                <p>{profileData?.age}</p>
                                <p>{profileData?.links}</p>
                                <a href="/dashboard">Back to Dashboard</a>
                            </div>
                        ) : (
                            <div>
                                {!showFormBtn ? <button onClick={revealForm}>Create Profile</button> : (
                                    <p>Hello World!</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </MainContainer>
        </ProfileContainer>
    );
}

export default Profile;

import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/Nav';
import Sidebar from '../../components/sidebar/sidebar';
import {ProfileContainer, MainContainer, UserInfoContainer} from '../profile/styles';
import profile from "../../API/profile";
import SideMenu from "../../components/sideMenu/SideMenu";

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
            <SideMenu />
            <MainContainer>
                <div className="profile-header">
                    <h2>Profile</h2>
                    <span className="breadcrumb">
                        <b><a href="/dashboard">Dashboard</a> / <a>Profile</a></b>
                    </span>
                </div>
                <UserInfoContainer>
                    <div className="user-info-header">
                        <div className="profile-img-container">
                            <img src={profileData?.owner?.avatar} className="profile-img" alt="" width="600" height="400" />
                        </div>
                        <span className="headline-container">
                            <h2>{profileData?.owner?.name}</h2>
                            <span>{profileData?.occupation}</span>
                        </span>
                    </div>
                    <div className="personal-info-container">
                        <h4 className="personal-info-title">Your Personal infomation</h4>
                        <span>
                            <label htmlFor="">Full Name</label>:{' '}
                            {profileData?.owner?.name}
                        </span>
                        <br />
                        <span>
                            <label htmlFor="">Age</label>:{' '}
                            {profileData?.age}
                        </span>
                        <br />
                        <span>
                            <label htmlFor="">Biography</label>:{' '}
                            {profileData?.bio}
                        </span>
                    </div>
                </UserInfoContainer>
            </MainContainer>
        </ProfileContainer>
    );
}

export default Profile;

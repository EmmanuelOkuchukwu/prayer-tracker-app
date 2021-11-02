import React, { useState } from 'react';
import '../../scss/landingPage.scss';
import { useHistory } from 'react-router-dom';
import LearnBackground from '../../assets/learn-2001847_1920.jpg';
import BulbsBackground from '../../assets/bulbs-4550601_1920.jpg';
import BoardBackground from '../../assets/board-3699939_1920.jpg';
import Fundamentals from '../../assets/fundamentals.svg';
import Navigationbar from "../../component/Navigation";

export default function LandingPage() {
    const history = useHistory();
    return (
        <div>
            <Navigationbar />
            <div className="banner-container">
                <div className="signin-signup-container">
                    <h1>Task Tracker App</h1>
                    <p>Welcome back to the Task Tracker App. While using this Application you will be able to create, read, update and delete the tasks. You will be able to keep track of your completed and uncompleted tasks as well.</p>
                    <div className="flex-container">
                        <h4>Register for an account or Sign In for full access by clicking the buttons below</h4>
                        <div className="btn-flex">
                            <button className="signin-button" onClick={() => history.push('/login')}>Log In</button>
                            <button className="signup-button" onClick={() => history.push('/register')}>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="get-started-container"></div>*/}
            <div className="main-container">
                <div className="card-flex">
                    <div className="card-container">
                        <img src={LearnBackground} alt="" className="img-responsive" width="600" height="400" />
                        <div className="description">
                            <h2>Task Center</h2>
                            <p>This is the home to all of your tasks, from here you will have access to all your tasks in one place and you will be able to delete and or edit your tasks as you will.</p>
                            {/*<button>Visit</button>*/}
                        </div>
                    </div>
                    <div className="card-container">
                        <img src={BulbsBackground} alt="" className="img-responsive" width="600" height="400" />
                        <div className="description">
                            <h2>Profile</h2>
                            <p>Your profile is where you can find all your details and profile avatar if you have one, and you will be able to edit your profile description as you see fit.</p>
                            {/*<button>Visit</button>*/}
                        </div>
                    </div>
                    <div className="card-container">
                        <img src={BoardBackground} alt="" className="img-responsive" width="600" height="400" />
                        <div className="description">
                            <h2>Your not alone</h2>
                            <p>You are not alone in the app, you can discover other users that are using the app as well, you will have the oppotunity to share brillient and creative ideas with other users and connect with them.</p>
                            {/*<button>Check out your score</button>*/}
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-lessons">
                <div className="main-section">
                    <div className="img-section">
                        <img className="img" src={Fundamentals} alt="" width="600" height="400"/>
                    </div>
                    <div className="text-desc">
                        <h1>Learn together</h1>
                        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deleniti possimus magnam corporis ratione facere!</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque reiciendis eius autem eveniet mollitia, at asperiores suscipit quae similique laboriosam iste minus placeat odit velit quos, nulla architecto amet voluptates?</p>
                    </div>
                </div>
            </div>
            <div className="lectures">
                <div className="main-container">
                    <h3>Meet Your Lecturers</h3>
                </div>
            </div>
        </div>
    );
}

import React, { Fragment } from 'react';
import './App.css';
import { GlobalStyles } from './config/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import CreateTask from './pages/dashboard/CreateTask';
import Home from './pages/Home/Home';
import { PrivateRoute } from './pages/auth/PrivateRoute';
import UpdateTask from './pages/dashboard/UpdateTask';
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div>
        <GlobalStyles />
        <Router>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={ <Home /> } />
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/register" element={ <Register /> } />
                    <Route path='/dashboard' element={ <PrivateRoute><Dashboard /></PrivateRoute> } />
                    <Route path="/profile" element={ <PrivateRoute><Profile /></PrivateRoute> } />
                    <Route path="/create-task" element={ <PrivateRoute><CreateTask /></PrivateRoute> } />
                    <Route path="/update-task/:id" element={ <PrivateRoute><UpdateTask /></PrivateRoute> } />
                </Routes>
            </Fragment>
        </Router>
    </div>
  );
}

export default App;

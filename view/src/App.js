import React, { Fragment } from 'react';
import './App.css';
import { GlobalStyles } from './config/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import CreateTask from './pages/dashboard/CreateTask';
import Home from './pages/Home/Home';
import auth from './API/auth';
import { history } from './HistoryUtil';
import { PrivateRoute } from './pages/auth/PrivateRoute';

function App() {
    // const currentUser = localStorage.getItem('jwt');
    // if (!currentUser) {
    //     history.push('/');
    // } else {
    //     history.push('/dashboard');
    // }
  return (
    <div>
        <GlobalStyles />
        <Router>
            <Fragment>
                <Routes>
                    <Route path="/landing" element={ <Home /> } />
                    <Route exact path="/" element={ <Login /> } />
                    <Route path="/register" element={ <Register /> } />
                    <Route path='/dashboard' element={ <PrivateRoute> <Dashboard /> </PrivateRoute> } />
                    <Route path="/create-task" element={ <CreateTask /> } />
                </Routes>
            </Fragment>
        </Router>
    </div>
  );
}

export default App;

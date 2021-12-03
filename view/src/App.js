import React, { Fragment } from 'react';
import './App.css';
import { GlobalStyles } from './config/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import auth from './API/auth';
import { history } from './HistoryUtil';

function App() {
    const currentUser = auth.getCurrentUser();
    if (!currentUser) {
        history.push('/');
    }
  return (
    <div>
        <GlobalStyles />
        <Router>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={ <Login /> } />
                    <Route path="/register" element={ <Register /> } />
                    <Route path='/dashboard' element={ <Dashboard /> } />
                </Routes>
            </Fragment>
        </Router>
    </div>
  );
}

export default App;

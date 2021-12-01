import React from 'react';
import './App.css';
import { GlobalStyles } from './config/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  return (
    <div>
        <GlobalStyles />
        <Router>
            <Routes>
                <Route exact path="/" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
            </Routes>
        </Router>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import TaskCenter from './pages/tasks/taskCenter';
import './scss/App.scss';
import './scss/styles.scss';
import AddTask from './pages/tasks/addTask';
import UpdateTask from './pages/tasks/updateTask';
import Navigationbar from './component/Navigation';
import Login from './pages/auth/login';
import { AuthService } from './service/authService';
import Register from './pages/auth/register';
import Profile from './pages/dashboard/Profile';
import LandingPage from './pages/dashboard/landingPage';
import { PrivateRoute } from './util/privateRouteUtil';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
      AuthService.currentUser.subscribe(x => {
          setUser(x)
      })
  }, [])
  const jwt = user?.token
  return (
    <div className="app">
      {jwt ? <Navigationbar jwt={jwt} /> : ''}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/task-center" component={TaskCenter} />
        <PrivateRoute path="/add-task" component={AddTask} />
        <PrivateRoute path="/update-task/:id" component={UpdateTask} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;

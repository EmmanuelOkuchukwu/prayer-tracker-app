import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import TaskCenter from './pages/tasks/taskCenter';
import './scss/App.scss';
import './scss/styles.scss';
import AddTask from './pages/tasks/addTask';
import UpdateTask from './pages/tasks/updateTask';
import Navigationbar from "./component/Navigation";
import Login from './pages/auth/login';
import {AuthService} from "./service/authService";

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
      <Navigationbar jwt={jwt} />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/task-center" component={TaskCenter} />
        <Route path="/add-task" component={AddTask} />
        <Route path="/update-task/:id" component={UpdateTask} />
      </Switch>
    </div>
  );
}

export default App;

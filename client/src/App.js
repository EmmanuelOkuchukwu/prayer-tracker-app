import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TaskCenter from './pages/taskCenter';
import './scss/App.scss';
import './scss/styles.scss';
import AddTask from './pages/addTask';
import UpdateTask from './pages/updateTask';

function App() {
  return (
    <div className="app">
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <h3>Task Tracker</h3>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={TaskCenter} />
        <Route path="/add-task" component={AddTask} />
        <Route path="/update-task/:id" component={UpdateTask} />
      </Switch>
    </div>
  );
}

export default App;

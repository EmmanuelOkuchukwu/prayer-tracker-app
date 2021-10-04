import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TaskCenter from './pages/taskCenter';
import './scss/App.scss';
import './scss/styles.scss';
import AddTask from './pages/addTask';
import UpdateTask from './pages/updateTask';
import Navigationbar from "./component/Navigation";

function App() {
  return (
    <div className="app">
      <Navigationbar />
      <Switch>
        <Route exact path="/" component={TaskCenter} />
        <Route path="/add-task" component={AddTask} />
        <Route path="/update-task/:id" component={UpdateTask} />
      </Switch>
    </div>
  );
}

export default App;

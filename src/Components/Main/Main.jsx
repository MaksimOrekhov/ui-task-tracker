import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthForm from '../Auth/AuthForm';
import TasksList from '../TasksList/TasksList';
import Task from '../Task/Task'

const Main = () => (
    <Switch>
        <Route exact path='/' component={AuthForm}/>
        <Route path='/tasks' component={TasksList}/>
        <Route path='/task/:id' component={Task}/>
    </Switch>
)

export default Main
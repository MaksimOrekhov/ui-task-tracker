import React, {Component} from 'react';
import tasks from '../../Tasks/tasks.json';
import {Link} from 'react-router-dom';
import s from './styles.css';

class Task extends Component {
    constructor() {
      super();
      this.state = {
        tasks,
        task_id: ''
      };
      this.currentTask = '';
    }

componentWillMount() {
  this.getTaskId();
}

getTaskId = () => {
  const url = window.location.href;
  this.setState({
    task_id: url.substring(url.lastIndexOf('/') + 1)
  }, () => this.renderCurrentTask());

};

renderCurrentTask = () => {
  const { tasks, task_id } = this.state;
  const taskList = Object.values(tasks);

  taskList.forEach(task => {
    if (task.id === task_id) {
      this.currentTask = task;
    }
  })
  return (
    <div>
      <h2 className={s.task_title}>{this.currentTask.number}. {this.currentTask.name}</h2>
      <div className={s.task_details}>
        <h4 className={s.task_details_title}>Детали задачи</h4>
        <div>Дата: {this.currentTask.date}</div>
        <div>Статус: {this.currentTask.status}</div>
        <div>Приоритет: {this.currentTask.priority}</div>
      </div>
      <div className={s.task_description}>
        <h4>Описание</h4>
        <div>{this.currentTask.description}</div>
      </div>
    </div>
    
  )
};

render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderCurrentTask()}
        </div>
        <Link to='/tasks' title='tasksList'><button className={s.button}>Вернуться к списку задач</button></Link>
      </div>
    );
  }
}

export default Task
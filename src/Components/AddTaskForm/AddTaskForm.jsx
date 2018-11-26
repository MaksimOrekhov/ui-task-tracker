import React, {Component} from 'react';
import TaskName from '../Controls/ControlTaskName';
import TaskDescription from '../Controls/ControlTaskDescription';
import TaskPriority from '../Controls/ControlTaskPriority';
import s from './styles.css';

class AddTaskForm extends Component {

  render() {
    const { handleChange, addNewTask } = this.props;
    return (
      <div className={s.task_form}>
        <TaskName 
        name="name"
        handleChange={handleChange}
        />
        <TaskDescription 
        name="description"
        handleChange={handleChange}
        />
        <TaskPriority 
        name="priority"
        handleChange={handleChange}
        />
        <button className={s.button} onClick={addNewTask}>Сохранить</button>
      </div>
    );
  }
}

export default AddTaskForm
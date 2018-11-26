import React, {Component} from 'react';
import s from './styles.css';

class TaskName extends Component {

  handleChange = (e) => {
      let value = e.target.value;
      const { handleChange, name } = this.props;
      handleChange && handleChange(name, value);
  };

  render() {
    return (
      <div className={s.task_name}>
        <label htmlFor="taskNameInput">Название задачи:</label>
        <input type="text" onChange={this.handleChange} className="form-control" id="taskNameInput" placeholder="Введите название задачи"></input>
      </div>
    );
  }
}

export default TaskName



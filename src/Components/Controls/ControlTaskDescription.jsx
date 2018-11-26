import React, {Component} from 'react';
import s from './styles.css';

class TaskDescription extends Component {

  handleChange = (e) => {
      let value = e.target.value;
      const { handleChange, name } = this.props;
      handleChange && handleChange(name, value);
  };

  render() {
    return (
      <div className={s.task_description}>
        <label htmlFor="taskDescriptionInput">Описание задачи:</label>
        <textarea type="text" onChange={this.handleChange} className="form-control" id="taskDescriptionInput" placeholder="Введите описание задачи"></textarea>
      </div>
    );
  }
}

export default TaskDescription



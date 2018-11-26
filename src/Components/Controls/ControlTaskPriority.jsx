import React, {Component} from 'react';
import s from './styles.css';

class TaskPriority extends Component {
  
  handleChange = (e) => {
      let value = e.target.value;
      const { handleChange, name } = this.props;
      handleChange && handleChange(name, value);
  };

  render() {
    return (
      <div className={s.task_priority}>
        <div>Приоритет:</div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Низкий" onChange={this.handleChange} />
          <label className="form-check-label" htmlFor="inlineRadio1">Низкий</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Средний" onChange={this.handleChange} />
          <label className="form-check-label" htmlFor="inlineRadio2">Средний</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Высокий" onChange={this.handleChange} />
          <label className="form-check-label" htmlFor="inlineRadio3">Высокий</label>
        </div>
      </div>
    );
  }
}

export default TaskPriority



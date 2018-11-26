import React, {Component} from 'react';
import tasks from '../../Tasks/tasks.json';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import s from './styles.css';
import cx from 'classnames';

class TasksList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tasks,
      table_view: 'inDetail',
      asc: true,
      show_add_task_form: false
    };
  }

  changeTableView = (view) => () => {
    this.setState({
      table_view: view
    })
  };

  sortResults = (prop, asc) => () => {
    let tasks = this.state.tasks.sort(function(a, b) {
        if (asc) {
            return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
        } else {
            return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
        }
    });
    this.setState({
      tasks,
      asc
    })
}

handleChange = (name, value) => {
  this.setState({
      [name]: value
  })
};

showAddTaskForm = () => {
  this.setState({
    show_add_task_form: true
  })
};

formatDate = (date) => {

  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = date.getFullYear();

  return dd + '.' + mm + '.' + yy;
}

addNewTask = () => {
  const { name, description, tasks, priority } = this.state;
  const status = 'план';

  let id = +tasks[tasks.length - 1].id + 1;
  let number = id;
  const current_date = new Date();
  let date = this.formatDate(current_date);
  let newTask = {name, description, priority, status, id, number, date};
  let newTasks = [...tasks, newTask];
 
  this.setState({
    tasks: newTasks,
    show_add_task_form: false
  })
}

  render() {
    const { tasks, table_view, asc, show_add_task_form } = this.state;
      return (
          <div className="container">
            <div className={s.title_block}>
              <h2 className={s.title}>Список задач</h2>
              <div className={s.change_view}>
                <span className={s.change_view_item} onClick={this.changeTableView('inDetail')}>Подробно</span>
                <span className={s.change_view_item} onClick={this.changeTableView('briefly')}>Кратко</span>
                {/* <span className={s.change_view_item} onClick={this.changeTableView('scrum')}>Scrum</span> */}
              </div>
            </div>
            <table className="table table-hover table-responsive-md">
              {
                table_view === 'inDetail' &&
                <tbody className={s.table}>
                  <tr>
                    <th className={cx(`${s.sort_table} ${this.state.asc ? `${s.asc}` : `${s.desc}`}`)} onClick={this.sortResults('number', asc ? false : true)}>№</th>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Дата</th>
                    <th>Приоритет</th>
                    <th className={cx(`${s.sort_table} ${this.state.asc ? `${s.asc}` : `${s.desc}`}`)} onClick={this.sortResults('status', asc ? false : true)}>Статус</th>
                  </tr>
                  {
                    tasks.map(task => {
                      return (
                        <tr key={task.id}  className={s.table_row}>
                          <td>{task.number}</td>
                          <td><Link to={`task/${task.id}`}>{task.name}</Link></td>
                          <td>{task.description}</td>
                          <td>{task.date}</td>
                          <td>{task.priority}</td>
                          <td>{task.status}</td>
                        </tr>
                      ) 
                    })
                  }
                </tbody>
              }
              {
                table_view === 'briefly' &&
                <tbody className={s.table}>
                  <tr>
                    <th className={cx(`${s.sort_table} ${this.state.asc ? `${s.asc}` : `${s.desc}`}`)} onClick={this.sortResults('number', asc ? false : true)}>№</th>
                    <th>Название</th>
                    <th>Приоритет</th>
                    <th className={cx(`${s.sort_table} ${this.state.asc ? `${s.asc}` : `${s.desc}`}`)} onClick={this.sortResults('status', asc ? false : true)}>Статус</th>
                  </tr>
                  {
                    Object.values(tasks).map(task => {
                      return (
                        <tr key={task.id} className={s.table_row}>
                          <td>{task.number}</td>
                          <td><Link to={`task/${task.id}`}>{task.name}</Link></td>
                          <td>{task.priority}</td>
                          <td>{task.status}</td>
                        </tr>
                      ) 
                    })
                  }
                </tbody>
              }
              {
                table_view === 'scrum' &&
                <tbody className={s.table}>
                  <tr>
                    <th>План</th>
                    <th>В процессе</th>
                    <th>Готово</th>
                  </tr>
                    {
                      Object.values(tasks).map(task => {
                        if (task.status_id === '1') {
                          return (
                            <tr key={task.id} onClick={() => window.location = `task/${task.id}`} className={s.table_row}>
                              <td>
                                <div>{task.number}</div>
                                <div>{task.name}</div>
                                <div>{task.priority}</div>
                                <div>{task.status}</div>
                              </td>
                              <td></td>
                              <td></td>
                            </tr>
                          ) 
                        }
                        if (task.status_id === '2') {
                          return (
                            <tr key={task.id} onClick={() => window.location = `task/${task.id}`} className={s.table_row}>
                              <td></td>
                              <td>
                                <div>{task.number}</div>
                                <div>{task.name}</div>
                                <div>{task.priority}</div>
                                <div>{task.status}</div>
                              </td>
                              <td></td>
                            </tr>
                          ) 
                        }
                        if (task.status_id === '3') {
                          return (
                            <tr key={task.id} onClick={() => window.location = `task/${task.id}`} className={s.table_row}>
                              <td></td>
                              <td></td>
                              <td>
                                <div>{task.number}</div>
                                <div>{task.name}</div>
                                <div>{task.priority}</div>
                                <div>{task.status}</div>
                              </td>
                            </tr>
                          ) 
                        }
                      })
                    }
                </tbody>
              }
            </table>
            <button className={s.button} onClick={this.showAddTaskForm}>Добавить задачу</button>
            {
              show_add_task_form &&
              <AddTaskForm 
              handleChange={this.handleChange}
              addNewTask={this.addNewTask}
            />
            }
            
          </div>
      );
  }
}

export default withRouter(TasksList)
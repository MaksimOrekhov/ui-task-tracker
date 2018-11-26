import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import users from '../../Users/users.json';
import Login from '../Controls/ControlLogin';
import Password from '../Controls/ControlPassword';
import s from './styles.css';
// import glob from '../../styles/global/global.css'

class AuthForm extends Component {
  constructor() {
    super();
    this.state = {
      users,
      login: '',
      password: '',
      login_is_valid: '',
      password_is_valid: ''
    }
  }

  handleChange = (name, value) => {
    this.setState({
        [name]: value,
        login_is_valid: '',
        password_is_valid: ''
    })
  };

  checkUserAuth = (e) => {
    const { users, login, password } = this.state;
    if (users.every(user => (user.login !== login))) {
      e.preventDefault();
      this.setState({
        login_is_valid: false
      })
    }
    if (users.every(user => (user.password !== password)) || users.some(user =>(user.password !== password))) {
      e.preventDefault();
      this.setState({
        password_is_valid: false
      })
    }
  };

  render() {
    const { login_is_valid, password_is_valid } = this.state;

    return (
        <div className={`container ${s.container_auth}`}>
          <div className="row justify-content-md-center">
            <form className={s.auth_form}>
              <h2>Пожалуйста авторизуйтесь</h2>
              <div className="form-group">
                <Login 
                  handleChange={this.handleChange}
                  name="login"
                  login_is_valid={login_is_valid}
                />
              </div>
              <div className="form-group">
                <Password 
                  handleChange={this.handleChange}
                  name="password"
                  password_is_valid={password_is_valid}
                />
              </div>
              <Link to='/tasks' title='auth' onClick={this.checkUserAuth}><button type="submit" className={s.submit_button}>Войти</button></Link>
            </form>
          </div>
        </div>
    );
  }
}

export default withRouter(AuthForm)



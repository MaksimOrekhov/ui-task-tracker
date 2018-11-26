import React, {Component} from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: '',
    }
  }

  handleChange = (e) => {
      let value = e.target.value;
      const { handleChange, name } = this.props;
      handleChange && handleChange(name, value);
  };

  render() {
    const { login_is_valid } = this.props;
    return (
      <div>
        <label htmlFor="loginInput">Логин:</label>
        <input type="text" onChange={this.handleChange} className={`form-control ${login_is_valid === false ? 'is-invalid' : ''}`} id="loginInput" placeholder="Введите логин"></input>
        {
          !login_is_valid &&
          <div className="invalid-feedback">Вы ввели неправильный логин</div>
        }
      </div>
    );
  }
}

export default Login



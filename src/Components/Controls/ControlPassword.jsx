import React, {Component} from 'react';
// import cx from 'classnames'

// import s from './styles.css'
// import glob from '../../styles/global/global.css'

class Password extends Component {
    constructor() {
      super();
      this.state = {
        password: ''
      }
    }

    handleChange = (e) => {
        let value = e.target.value;
        const { handleChange, name } = this.props;
        handleChange && handleChange(name, value);
    };

    render() {
      const { password_is_valid } = this.props;
      return (
        <div>
          <label htmlFor="passwordInput">Пароль:</label>
          <input type="password" onChange={this.handleChange} className={`form-control ${password_is_valid === false ? 'is-invalid' : ''}`} id="passwordInput" placeholder="Введите пароль"></input>
          {
            !password_is_valid &&
            <div className="invalid-feedback">Вы ввели неправильный пароль</div>
          }
        </div>
      );
    }
}

export default Password
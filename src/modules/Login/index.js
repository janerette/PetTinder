// Login/index.js

import React, {Component} from 'react';
import classnames from 'classnames';

import './login.css';
import logo from '../../img/logo_white.svg';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  };

  componentWillMount() {

  }

  render() {

    const {className, ...props} = this.props;

    return (
      <div className={ classnames("login", className)} {...props}>
        <div className="home-logo">
          <img src={logo}/>
        </div>
        <form className="login-form">
          <input type="email" placeholder="email adress"/>
          <input type="password" placeholder="password"/>
          <input type="submit" value="login"/>
        </form>
        <label>- or -</label>
        <div className="facebook-login">
          <a className="button">Login with Facebook</a>
        </div>
      </div>
    )
  }

}


// WEBPACK FOOTER //
// ./src/modules/Login/index.js
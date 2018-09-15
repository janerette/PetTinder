// Register/index.js

import React, {Component} from 'react';
import classnames from 'classnames';

import './register.css';
import logo from '../../img/logo_white.svg';

export default class Register extends Component {

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
          <input type="submit" value="register"/>
        </form>
        <label>- or -</label>
        <div className="facebook-login">
          <a className="button">Register with Facebook</a>
        </div>
        <label>Fastest & Most Popular</label>
      </div>
    )
  }

}


// WEBPACK FOOTER //
// ./src/modules/Register/index.js
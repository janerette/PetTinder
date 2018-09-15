// Menu/index.js

import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';

import './menu.css';
import logo from '../../img/logo.svg';

export default class Menu extends Component {

  render() {

    const {className, ...props} = this.props;

    return (
      <div className={ classnames("main-nav", className)} {...props}>
        <div className="main-menu flex-row">
          <div className="flex-1 small-padding-left">
            <a><FontAwesome name="bars"/></a>
          </div>
          <div className="menu-logo flex-1">
            <NavLink to="/"><img src={logo}/></NavLink>
          </div>
          <div className="flex-1 profile-link text-right small-padding-right">
            <NavLink to="/profile"><FontAwesome name="user"/></NavLink>
          </div>
        </div>
      </div>
    )
  }

}



// WEBPACK FOOTER //
// ./src/modules/Menu/index.js
// Logout/index.js

import React, {Component} from 'react';
import classnames from 'classnames';

import './logout.css';

export default class Logout extends Component {

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
      <div className={ classnames("logout", className)} {...props}>

      </div>
    )
  }

}


// WEBPACK FOOTER //
// ./src/modules/Logout/index.js
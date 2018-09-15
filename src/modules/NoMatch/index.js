// NoMatch/index.js

import React, {Component} from 'react';
import classnames from 'classnames';

import './no-match.css';

export default class NoMatch extends Component {

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
      <div className={ classnames("no-match", className)} {...props}>

      </div>
    )
  }

}


// WEBPACK FOOTER //
// ./src/modules/NoMatch/index.js
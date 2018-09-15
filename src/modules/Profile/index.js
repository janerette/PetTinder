// Profile/index.js

import React, {Component} from 'react';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';

import './profile.css';

export default class Profile extends Component {

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
      <div className={ classnames("profile big-padding-top", className)} {...props}>
        <div className="user-info small-padding">
          <div className="flex-row">
            <div className="flex-1">
              <div class="user-photo"></div>
            </div>
            <div className="flex-1 spacer"></div>
          </div>
          <div className="flex-row">
            <div className="flex-2 user-text-info">
              <h2>Tom PM</h2>
            </div>
            <div className="flex-1 edit">
              <a><FontAwesome name="pencil"/></a>
            </div>
          </div>
        </div>
        <hr/>
        <div className="small-padding foster">
          <input type="checkbox"/><label>Looking to foster</label>
        </div>
        <hr/>
        <div className="small-padding donation">
          <label>Donation amount per Love</label>
          <input type="range"/>
        </div>
        <hr/>
        <div className="small-padding plan">
          <label>Current plan</label>
          <div className="flex-row">
            <div className="flex-1"><h2 className="plan-name">Pet Friend</h2></div>
            <div className="flex-1"><h2 className="plan-amount">5$ / month</h2></div>
            <div className="flex-1 edit">
              <a><FontAwesome name="pencil"/></a>
            </div>
          </div>
        </div>
        <hr/>
        <div className="small-padding payment-method">
          <div className="flex-row">
            <div className="flex-2">
              <label>Payment method</label>
              <FontAwesome name="credit-card"/><span className="credit-card">••••  ••••  ••••  1234</span>
            </div>
            <div className="flex-1 edit">
              <a><FontAwesome name="pencil"/></a>
            </div>
          </div>
        </div>
        <hr/>
        <div className="small-padding delete-account">
          <a>Delete account</a>
        </div>
      </div>
    )
  }

}


// WEBPACK FOOTER //
// ./src/modules/Profile/index.js
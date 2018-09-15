import React, { Component } from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import Menu from '../Menu';
import Login from '../Login';
import Logout from '../Logout';
import Register from '../Register';
import Swipe from '../Swipe';
import Profile from '../Profile';
import NoMatch from '../NoMatch';
import PetContainer from './PetContainer';
import classnames from 'classnames';
import './App.css';

class App extends Component {
  render() {

    const {className, ...props} = this.props;

    return (
      <BrowserRouter>
        <div className={classnames('app', className)}>
          <Menu />
          <div className="main-content">
            <Switch>
              <Route exact path='/' component={Swipe}/>
              <Route path='/profile' component={Profile}/>
              <Route path='/pet' component={PetContainer}/>
              <Route path='/login' component={Login}/>
              <Route path='/logout' component={Logout}/>
              <Route path='/register' component={Register}/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;



// WEBPACK FOOTER //
// ./src/modules/App/index.js
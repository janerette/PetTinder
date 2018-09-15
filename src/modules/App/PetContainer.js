// App/PetContainer.js

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Pet from '../Pet';

const PetContainer = (props) => (
  <div className="pet-wrapper wrapper">
    <Switch>
      <Route path="/pet/:id" component={Pet}/>
    </Switch>
  </div>
);

export default PetContainer


// WEBPACK FOOTER //
// ./src/modules/App/PetContainer.js
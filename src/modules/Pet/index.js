// Pet/index.js

import React, {Component} from 'react';
import classnames from 'classnames';
import PetContent from './PetContent'
import {getPet} from '../../api';

import './pet.css';

export default class Pet extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  };

  componentWillMount() {
    let pet_id = this.props.match.params.id;
    getPet(pet_id, response => {
      this.setState({
        pet: response,
      })
    })
  }

  render() {

    const {className, ...props} = this.props;
    const pet = this.state.pet;

    return (
      <div className={ classnames("pet", className)} {...props}>
        {
          pet ?
            <PetContent pet={pet}/> : <div></div>
        }

      </div>
    )
  }

}


// WEBPACK FOOTER //
// ./src/modules/Pet/index.js
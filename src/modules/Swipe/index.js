// Swipe/index.js

import React, {Component} from 'react';
import classnames from 'classnames';
import Cards, {Card} from 'react-swipe-card';
import FontAwesome from 'react-fontawesome';
import {getPets} from '../../api';
import CardContent from './CardContent';

import './swipe.css';
import symbol from '../../img/symbol.svg';

export default class Swipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pets: null
    }
  };

  shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

  componentWillMount() {
    getPets(response => {
      let shuffled_array = [];
      if(response) {
        shuffled_array = this.shuffle(response);
      }
      this.setState({
        pets: shuffled_array,
      });
      console.log(shuffled_array);
    })
  }

  render() {

    const {className, ...props} = this.props;
    const pets = this.state.pets;

    return (
      <div className={ classnames("swipe", className)} {...props}>
        {
          pets ?
            <Cards onEnd={console.log('end')} className='master-root'>
              {pets && pets.map((pet, key) =>
                <Card key={key}
                      onSwipeLeft={() => console.log('swipe left')}
                      onSwipeRight={() => this.props.history.push('/pet/' + pet.id.$t)}>
                  <CardContent pet={pet}/>
                </Card>

              )}
            </Cards> : <div></div>
        }
        <div className="buttons">
          <div className="flex-row">
            <div className="flex-1 spacer"></div>
            <div className="flex-1 unlike">
              <a className="big-button"><FontAwesome name="times"/></a>
            </div>
            <div className="flex-1 buttons-logo">
              <img src={symbol}/>
            </div>
            <div className="flex-1 like">
              <a className="big-button"><FontAwesome name="heart"/></a>
            </div>
            <div className="flex-1 spacer"></div>
          </div>
        </div>
        <div className="gradient"></div>
      </div>
    )
  }

}


// WEBPACK FOOTER //
// ./src/modules/Swipe/index.js
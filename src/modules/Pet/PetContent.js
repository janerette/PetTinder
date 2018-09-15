import React from 'react';
import FontAwesome from 'react-fontawesome';
import Slider from 'react-slick';
import {geolocated} from 'react-geolocated';

class PetContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  };

  render () {

    const pet = this.props.pet;

    console.log(pet);

    let images = pet.media.photos.photo;
    let img_big = images.filter(function (img) {
      return img["@size"] == "x";
    })
    let breed = pet.breeds.breed.$t;
    let name = pet.name.$t;
    let sex = pet.sex.$t;
    let description = pet.description.$t;
    let animal = pet.animal.$t;
    let age = pet.age.$t;
    let animal_age = pet.age.$t + " " + pet.animal.$t;

    let phone = pet.contact.phone.$t;
    let email = pet.contact.email.$t;
    let zipcode = pet.contact.zip.$t;
    let user_location = null;

    console.log(this.props);

    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <div className="photos">
          <div className="dots"></div>
          {
            img_big.length > 0 && <Slider {...settings}>
              {
                img_big.map(
                  (img) => <div className="photo" style={{backgroundImage: "url(" + img.$t + ")"}}></div>
                )
              }
            </Slider>
          }
        </div>
        <div className="text-content">
          <div className="small-padding">
            <div className="flex-row">
              <div className="flex-1">
                <h2 className="name">{name ? name : "Give me a name!"}</h2>
                {animal && age && <div className="animal-age">{animal_age}</div> }
                {breed ? <div className="breed">{breed}</div> : <div className="breed">No breed specified</div> }
              </div>
              <div className="sex flex-1">{sex ? sex : "?"}</div>
              <div className="share flex-1">
                <a><FontAwesome name="share-alt"/></a>
              </div>
            </div>
            <div className="distance small-padding-top small-padding-bottom">300m away</div>
            <div className="desc">{description ? description : "No description provided."}</div>
          </div>
          <hr/>
          <div className="small-padding contact">
            <h2 className="small-padding-bottom">Contact the shelter</h2>
            {phone ? <div className="phone"><FontAwesome name="phone"/><a href={"tel:" + email}>{phone}</a></div> :
              <span></span>}
            {email ? <div className="email"><FontAwesome name="envelope"/><a href={"mailto:" + email}>{email}</a></div> :
              <span></span>}
          </div>
        </div>
      </div>
    )
  }

};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(PetContent);


// WEBPACK FOOTER //
// ./src/modules/Pet/PetContent.js
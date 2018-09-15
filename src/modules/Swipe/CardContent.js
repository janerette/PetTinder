import React from 'react';

const CardContent = ({pet}) => {
  let background = pet.media.photos.photo[2].$t;
  let breed = pet.breeds.breed.$t;
  let name = pet.name.$t;
  let sex = pet.sex.$t;

  return (
  <div>
    <div className="card-content">
      <div className="card-images">
        <div className="img" style={{backgroundImage: "url(" + background + ")"}}></div>
      </div>
    </div>
    <div className="text-content small-padding">
      <div className="flex-row">
        <div className="flex-2">
          <h2 className="name">{name ? name : "Give me a name!"}</h2>
          {breed ? <div className="breed">{breed}</div> : <div className="breed">No breed specified</div> }
        </div>
        <div className="sex flex-1">{sex ? sex : "?"}</div>
      </div>
    </div>
  </div>
)};

export default CardContent


// WEBPACK FOOTER //
// ./src/modules/Swipe/CardContent.js
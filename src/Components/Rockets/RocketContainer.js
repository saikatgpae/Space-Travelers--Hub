import React from 'react';
import './Rockets.css';

function RocketContainer(props) {
  // eslint-disable-next-line react/prop-types
  const { img, name, description } = props;

  return (
    <div>
      <div className="container my-4">
        <div className="row">
          <img className="rocketImg col-4" src={img} alt="Rocket" />
          <div className="col-8">
            <h3 className="col-12">{name}</h3>
            <p className="col-12 my-4">{description}</p>
            <button type="button" className="col-4 reserveButton p-3">Reserve Rocket</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RocketContainer;

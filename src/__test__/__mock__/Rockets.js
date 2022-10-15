import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';

const Rockets = () => {
  const rockets = [
    {
      id: 1,
      name: 'Falcon 1',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
      img: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
      reserved: true,
    },
  ];

  return (
    <BrowserRouter>
      <h3>Rockets</h3>
      <ListGroup>
        {rockets.slice(1).map((rocket) => rocket.reserved && (
          <ListGroup.Item>{rocket.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </BrowserRouter>
  );
};

export default Rockets;

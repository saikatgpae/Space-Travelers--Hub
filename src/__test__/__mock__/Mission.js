import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';

const Mission = () => {
  const missions = [
    {
      id: '1',
      name: 'Thaicom',
      joined: true,
    },
  ];

  return (
    <BrowserRouter>
      <h3>Missions</h3>
      {missions.map((mission) => mission.joined && (
      <ListGroup key={mission.id}>
        <ListGroup.Item>{mission.name}</ListGroup.Item>
      </ListGroup>
      ))}
    </BrowserRouter>
  );
};

export default Mission;

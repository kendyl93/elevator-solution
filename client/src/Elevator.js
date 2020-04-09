import React, { useState } from 'react';

const Elevator = ({ id, direction, idleFloor }) => {
  return (
    <div>
      <h2>Elevator {id}</h2>
      <p>floor: {idleFloor}</p>
      <p>direction: {direction}</p>
    </div>
  );
};

export default Elevator;

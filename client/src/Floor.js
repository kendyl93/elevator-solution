import React from 'react';

const Floor = ({ id, elevator, setElevator }) => {
  const handleUpPressed = () => {
    setElevator({
      ...elevator,
      idleFloor: id,
      direction:
        id - elevator.idleFloor === 0
          ? '-'
          : id - elevator.idleFloor > 0
          ? 'UP'
          : 'DOWN'
    });
  };

  return (
    <div>
      <h2>Floor {id}</h2>
      <button type="button" onClick={handleUpPressed}>
        CALL elevator
      </button>
    </div>
  );
};

export default Floor;

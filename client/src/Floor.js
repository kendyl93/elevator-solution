import React from 'react';
import PropTypes from 'prop-types';

const calculateDirection = (idleFloor, destinatedFloor) => {
  const destinationAndIdleFloorDifference = idleFloor - destinatedFloor;

  if (destinationAndIdleFloorDifference === 0) {
    return '-';
  }

  if (destinationAndIdleFloorDifference < 0) {
    return 'UP';
  }

  return 'DOWN';
};

const Floor = ({ id, elevator, setElevator }) => {
  const handleUpPressed = () => {
    setElevator({
      ...elevator,
      idleFloor: id,
      direction: calculateDirection(elevator.idleFloor, id),
      busy: true
    });
  };

  return (
    <div>
      <h2>
        Floor
        {id}
      </h2>
      <button type="button" onClick={handleUpPressed}>
        CALL elevator
      </button>
    </div>
  );
};

Floor.propTypes = {
  id: PropTypes.number,
  elevator: PropTypes.object,
  setElevator: PropTypes.func
};

export default Floor;

import React from 'react';
import PropTypes from 'prop-types';

const isEligible = (direction, idleFloor, floor) => {
  if (direction === 0) {
    // eligible, and return distance
    return Math.abs(floor - idleFloor);
  } else {
    return -1;
  }
};

const handleRequest = (elevators, floor) => {
  var i,
    minIndex = -1,
    minDistance = Infinity;

  for (i = 0; i < elevators.length; i++) {
    var distanceIndex = isEligible(
      elevators[i].direction,
      elevators[i].idleFloor,
      floor
    );
    if (distanceIndex >= 0 && distanceIndex < minDistance) {
      minIndex = i;
      minDistance = distanceIndex;
    }
  }
  if (minIndex != -1) {
    console.log({ ELEV: elevators[minIndex] });
    // elevators[minIndex].assignJob(direction, floor);
  } else {
    alert('no eligible elevators');
  }
};

const calculateDirection = (idleFloor, destinatedFloor) => {
  const destinationAndIdleFloorDifference = idleFloor - destinatedFloor;

  if (destinationAndIdleFloorDifference === 0) {
    return 0;
  }

  if (destinationAndIdleFloorDifference < 0) {
    return 1;
  }

  return -1;
};

const Floor = ({ id, elevators, setElevator }) => {
  const handleUpPressed = () => {
    handleRequest(elevators, id);
    // setElevator({
    //   ...elevator,
    //   idleFloor: id,
    //   direction: calculateDirection(elevator.idleFloor, id),
    //   busy: true
    // });
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

import React, { useState, useEffect } from 'react';

import Floor from './Floor';
import Elevator from './Elevator';

const floors = [{ id: 5 }, { id: 4 }, { id: 3 }, { id: 2 }, { id: 1 }];
const DefaultElevators = [
  { id: 1, direction: 0, idleFloor: 1, busy: false },
  { id: 2, direction: 0, idleFloor: 4, busy: false }
];

const App = () => {
  const [elevators, setElevators] = useState(DefaultElevators);

  // useEffect(() => {
  //   if (!elevator.busy) {
  //     return;
  //   }

  //   setTimeout(() => {
  //     setElevator({ ...elevator, busy: false, direction: '-' });
  //   }, 2000);
  // }, [elevator]);

  return (
    <div>
      <div>
        {floors.map(({ id }) => (
          <Floor id={id} setElevators={setElevators} elevators={elevators} />
        ))}
      </div>
      <div>
        {elevators.map(elevator => (
          <Elevator
            id={elevator.id}
            idleFloor={elevator.idleFloor}
            direction={elevator.direction}
            status={elevator.status}
          />
        ))}
      </div>
    </div>
  );
};
export default App;

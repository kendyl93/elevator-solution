import React, { useState, useEffect } from 'react';

import Floor from './Floor';
import Elevator from './Elevator';

const floors = [{ id: 3 }, { id: 2 }, { id: 1 }];
const DefaultElevator = { id: 1, direction: '-', idleFloor: 1, busy: false };

const App = () => {
  const [elevator, setElevator] = useState(DefaultElevator);

  useEffect(() => {
    if (!elevator.busy) {
      return;
    }

    setTimeout(() => {
      setElevator({ ...elevator, busy: false, direction: '-' });
    }, 2000);
  }, [elevator]);

  return (
    <div>
      <div>
        {floors.map(({ id }) => (
          <Floor id={id} setElevator={setElevator} elevator={elevator} />
        ))}
      </div>
      <div>
        <Elevator
          id={elevator.id}
          idleFloor={elevator.idleFloor}
          direction={elevator.direction}
          busy={elevator.busy}
        />
      </div>
    </div>
  );
};
export default App;

import React, { useState } from 'react';

import Floor from './Floor';
import Elevator from './Elevator';

const floors = [{ id: 3 }, { id: 2 }, { id: 1 }];
const DefaultElevator = { id: 1, direction: '-', idleFloor: 1 };

const App = () => {
  const [elevator, setElevator] = useState(DefaultElevator);

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
        />
      </div>
    </div>
  );
};
export default App;

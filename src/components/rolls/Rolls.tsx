import { rolls } from '../../defaults';

import Roll from './Roll';

function Rolls() {
  return (
    <div className='Rolls flex flex-col justify-around gap-2 sm:flex-row'>
      {Array.from({ length: rolls }, (_, i) => i).map((roll) => (
        <Roll roll={roll.toString()} key={roll} />
      ))}
    </div>
  );
}

export default Rolls;

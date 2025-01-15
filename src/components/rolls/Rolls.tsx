import { rolls } from '../../defaults';

import Roll from './Roll';

function Rolls() {
  return (
    <div className='Rolls grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
      {Array.from({ length: rolls }, (_, i) => i).map((roll) => (
        <Roll roll={roll.toString()} key={roll} />
      ))}
    </div>
  );
}

export default Rolls;

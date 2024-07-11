import { die } from '../../../defaults';

import Dice from './Dice';

type DieProps = {
  roll: string;
};

function Die({ roll }: DieProps) {
  return (
    <div className='Die flex flex-wrap justify-between gap-2 sm:flex-col'>
      {Array.from({ length: die }, (_, i) => i + 1).map((dice) => (
        <Dice roll={roll} dice={dice.toString()} key={dice} />
      ))}
    </div>
  );
}

export default Die;

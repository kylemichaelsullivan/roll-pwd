import { useIndex } from '../../../context';

import Dots from './Dots';

import './dice.css';

type DiceProps = {
  roll: string;
  dice: string;
};

function Dice({ roll, dice }: DiceProps) {
  const { isDiceActive, handleDiceClick } = useIndex();

  return (
    <div
      className={`Dice${isDiceActive(roll, dice) ? ' active' : ''} flex flex-wrap justify-center cursor-pointer items-center border hover:ring-1`}
      title={`Roll ${+roll + 1} = ${dice}`}
      onClick={() => handleDiceClick(roll, dice)}
    >
      <Dots dice={dice} />
    </div>
  );
}

export default Dice;

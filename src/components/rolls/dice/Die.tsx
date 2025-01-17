import { die } from '../../../defaults';

import Dice from './Dice';

import './dice.css';

type DieProps = {
	roll: string;
};

function Die({ roll }: DieProps) {
	return (
		<div className='Die grid gap-2'>
			{Array.from({ length: die }, (_, i) => i + 1).map((dice) => (
				<Dice roll={roll} dice={dice.toString()} key={dice} />
			))}
		</div>
	);
}

export default Die;

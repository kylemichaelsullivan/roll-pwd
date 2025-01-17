import { useState } from 'react';

import More from './More';

function Documentation() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='Documentation flex flex-col gap-4 px-4'>
			<h2 className='text-center text-2xl font-bold'>
				RollPWD is <i>the</i> quick and simple way to pick secure passwords that
				are easy to remember!
			</h2>

			<button
				type='button'
				className='mx-auto border border-black p-2 hover:ring-1'
				onClick={() => setIsOpen(!isOpen)}
			>
				{!isOpen ? 'Learn More' : 'Hide Documentation'}
			</button>

			{isOpen && <More />}
		</div>
	);
}

export default Documentation;

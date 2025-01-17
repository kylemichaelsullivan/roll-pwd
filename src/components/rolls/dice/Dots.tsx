type DotsProps = {
	dice: string;
};

function Dots({ dice }: DotsProps) {
	const rows = 3;
	const cols = 3;

	const renderDots = () => {
		const dots = [];
		for (let i = 0; i < rows; i++) {
			const rowDots = [];
			for (let j = 0; j < cols; j++) {
				rowDots.push(
					<div key={j} className='dot h-full w-full rounded-full'></div>,
				);
			}
			dots.push(rowDots);
		}
		return dots;
	};

	return (
		<div className='Dots grid grid-cols-3 gap-1 p-1' data-dice={dice}>
			{renderDots()}
		</div>
	);
}

export default Dots;

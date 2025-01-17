type BinaryTableType = {
	selected?: number;
};

function BinaryTable({ selected }: BinaryTableType) {
	const cells = Array.from({ length: 9 }, (_, index) => 8 - index);

	return (
		<table className='BinaryTable w-full'>
			<tbody>
				<tr>
					<th>
						2<sup>X</sup>
					</th>
					{cells.map((cell) => (
						<td
							className={cell === selected ? 'selected' : ''}
							key={`exponent-${cell}`}
						>
							2<sup>{cell}</sup>
						</td>
					))}
				</tr>
				<tr>
					<th>Value</th>
					{cells.map((cell) => (
						<td
							className={cell === selected ? 'selected' : ''}
							key={`value-${cell}`}
						>
							{2 ** cell}
						</td>
					))}
				</tr>
			</tbody>
		</table>
	);
}

export default BinaryTable;

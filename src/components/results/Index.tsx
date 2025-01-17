import { useIndex } from '../../context';

function Index() {
	const { index, handleIndexChange } = useIndex();

	return (
		<label
			className='Index flex flex-auto cursor-pointer flex-col items-center gap-1 xs:flex-row'
			title='Put Results Here'
		>
			Index
			<input
				type='tel'
				className='flex-auto border p-1 hover:ring-1 focus-visible:ring-0'
				onChange={handleIndexChange}
				value={index.join('')}
			></input>
		</label>
	);
}

export default Index;

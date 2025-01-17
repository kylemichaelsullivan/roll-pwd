import Index from './Index';
import Reset from './Reset';
import Result from './Result';

function Results() {
	return (
		<div className='Results mx-auto flex flex-col gap-1'>
			<div className='flex items-center justify-between gap-1'>
				<Index />
				<Reset />
			</div>
			<Result />
		</div>
	);
}

export default Results;

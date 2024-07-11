import Index from './Index';
import Reset from './Reset';
import Result from './Result';

function Results() {
  return (
    <div className='Results flex flex-col gap-1'>
      <div className='flex justify-between gap-1 items-center'>
        <Index />
        <Reset />
      </div>
      <Result />
    </div>
  );
}

export default Results;

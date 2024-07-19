import Die from './dice/Die';

type RollProps = {
  roll: string;
};

function Roll({ roll }: RollProps) {
  return (
    <div className='Roll'>
      <h2 className='text-center'>{+roll + 1}</h2>
      <Die roll={roll} />
    </div>
  );
}

export default Roll;

import { useIndex } from '../../context';

import { lookups } from '../../lookups';

function Result() {
  const { index } = useIndex();
  const lookup: string = index.join('');
  const word = lookups[lookup];

  return <div className='Result text-center min-h-6'>{word}</div>;
}

export default Result;

import { useIndex } from '../../context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

function Reset() {
  const { reset } = useIndex();

  return (
    <button
      type='button'
      className='Reset hidden xs:block'
      title='Reset'
      onClick={reset}
    >
      <FontAwesomeIcon
        icon={faRefresh}
        className='self-center rounded-full text-center text-2xl w-6 p-2 transition duration-300 hover:bg-gray-300'
      />
    </button>
  );
}

export default Reset;

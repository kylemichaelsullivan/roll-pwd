import { useIndex } from '../../context';

function Index() {
  const { index, handleIndexChange } = useIndex();

  return (
    <label
      className='Index flex flex-auto gap-1 cursor-pointer items-center'
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

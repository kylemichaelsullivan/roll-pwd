import Title from './components/Title';
import Rolls from './components/rolls/Rolls';
import Results from './components/results/Results';

function App() {
  return (
    <div className='App flex flex-col gap-4 p-4'>
      <Title title='RollPWD' />
      <Rolls />
      <Results />
    </div>
  );
}

export default App;

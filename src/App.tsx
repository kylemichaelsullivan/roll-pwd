import Title from './components/Title';
import Rolls from './components/rolls/Rolls';
import Results from './components/results/Results';
import Documentation from './components/documentation/Documentation';

function App() {
	return (
		<div className='App mx-auto flex max-w-screen-xl flex-col gap-4 py-4'>
			<Title title='RollPWD' />
			<Rolls />
			<Results />
			<Documentation />
		</div>
	);
}

export default App;

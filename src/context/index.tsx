import {
	useState,
	useEffect,
	createContext,
	useContext,
	type ReactNode,
} from 'react';

type index = [string, string, string, string, string];

type IndexContextType = {
	index: index;
	ellipsis: string;
	isDiceActive: (roll: string, value: string) => boolean;
	handleDiceClick: (roll: string, value: string) => void;
	handleIndexChange: (e: { target: { value: string } }) => void;
	reset: () => void;
};

const IndexContext = createContext<IndexContextType | undefined>(undefined);

type IndexProviderProps = {
	children: ReactNode;
};

const initialIndex: index = ['', '', '', '', ''];

export const IndexProvider = ({ children }: IndexProviderProps) => {
	const [index, setIndex] = useState(initialIndex);

	const ellipsis = ['.', '.', '.'].join(String.fromCharCode(160));

	function isDiceActive(roll: string, value: string) {
		return index[+roll] === value.toString();
	}

	function handleDiceClick(roll: string, value: string) {
		const newIndex: index = [...index];
		newIndex[+roll] = value.toString();

		setIndex(newIndex);
	}

	function handleIndexChange(e: { target: { value: string } }) {
		const raw = e.target.value;
		const filtered = raw.replace(/[^1-6]/g, '').slice(-5);
		const buffer = filtered.split('');

		if (buffer.length) {
			const newIndex: index = [...index];
			buffer.map((val, i) => (newIndex[+i] = val));

			setIndex(newIndex);
		} else {
			setIndex(initialIndex);
		}
	}

	function reset() {
		setIndex(initialIndex);
	}

	useEffect(() => {
		const handleKeyUp = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				reset();
			}
		};

		window.addEventListener('keyup', handleKeyUp);

		return () => {
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, [index]);

	return (
		<IndexContext.Provider
			value={{
				index,
				ellipsis,
				isDiceActive,
				handleDiceClick,
				handleIndexChange,
				reset,
			}}
		>
			{children}
		</IndexContext.Provider>
	);
};

export const useIndex = (): IndexContextType => {
	const context = useContext(IndexContext);
	if (!context) {
		throw new Error('useIndex must be used within a <IndexProvider />');
	}
	return context;
};

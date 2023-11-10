import { ClockDetailsCtxProvider } from './context/ClockDetailsCtxProvider';
import Main from './components/Main';

const App = () => {
	return (
		<ClockDetailsCtxProvider>
			<Main />
		</ClockDetailsCtxProvider>
	);
};

export default App;

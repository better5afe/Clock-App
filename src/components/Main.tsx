import Quote from './subcomponents/Quote';
import Clock from './subcomponents/Clock';

import './Main.scss';

// main--nighttime

const Main = () => {
	return (
		<main className='main main--daytime'>
			<Quote />
			<Clock />
			<div className='main__shadow'></div>
		</main>
	);
};

export default Main;

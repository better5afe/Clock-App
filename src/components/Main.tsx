import Quote from './subcomponents/Quote';
import Clock from './subcomponents/Clock';
import ClockDetails from './subcomponents/ClockDetails';

import './Main.scss';

// main--nighttime

const Main = () => {
	return (
		<main className='main main--daytime'>
			<Quote />
			<Clock />
			<ClockDetails />
			<div className='main__shadow'></div>
		</main>
	);
};

export default Main;

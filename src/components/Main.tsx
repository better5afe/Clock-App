import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/typed-hooks';
import Quote from './subcomponents/Quote';
import Clock from './subcomponents/Clock';
import ClockDetails from './subcomponents/ClockDetails';
import './Main.scss';

// main--nighttime

const Main = () => {
	const selectedState = useAppSelector((state) => state);

	const dispatch = useAppDispatch();

	return (
		<main className='main main--daytime'>
			<Quote />
			<Clock abbreviation={selectedState.abbreviation} />
			<ClockDetails
				timezone={selectedState.timezone}
				dayOfYear={selectedState.dayOfYear}
				dayOfWeek={selectedState.dayOfWeek}
				weekNum={selectedState.weekNum}
			/>
			<div className='main__shadow'></div>
		</main>
	);
};

export default Main;

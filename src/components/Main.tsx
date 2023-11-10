import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/typed-hooks';
import { fetchTime, fetchHour } from '../store/clock-slice';
import Quote from './subcomponents/Quote';
import Clock from './subcomponents/Clock';
import ClockDetails from './subcomponents/ClockDetails';
import './Main.scss';

// main--nighttime

const Main = () => {
	const selectedState = useAppSelector((state) => state);

	const dispatch = useAppDispatch();

	useEffect(() => {
		// dispatch(fetchLocation());

		dispatch(fetchTime());

		const timer = setInterval(() => {
			dispatch(fetchHour());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<main className='main main--daytime'>
			<Quote />
			<Clock
				time={selectedState.time}
				abbreviation={selectedState.abbreviation}
			/>
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

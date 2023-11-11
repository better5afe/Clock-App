import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/typed-hooks';
import { fetchTime } from '../store/clock-slice';
import Quote from './subcomponents/Quote';
import Clock from './subcomponents/Clock';
import ClockDetails from './subcomponents/ClockDetails';
import './Main.scss';

const Main = () => {
	const selectedState = useAppSelector((state) => state);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchTime());
	}, []);

	return (
		<main
			className={`main main--${
				selectedState.timeOfDay === 'day' ? 'daytime' : 'nighttime'
			}`}
		>
			<Quote />
			<Clock abbreviation={selectedState.abbreviation} />
			<ClockDetails
				timezone={selectedState.timezone}
				dayOfYear={selectedState.dayOfYear}
				dayOfWeek={selectedState.dayOfWeek}
				weekNum={selectedState.weekNum}
				timeOfDay={selectedState.timeOfDay}
			/>
			<div className='main__shadow'></div>
		</main>
	);
};

export default Main;

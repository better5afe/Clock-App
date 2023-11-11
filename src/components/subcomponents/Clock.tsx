import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setHour } from '../../store/clock-slice';
import { ClockDetailsCtx } from '../../context/clock-details-ctx';
import { ClockProps } from '../../@types/components/component-types';
import ClockDetailsBtn from './ClockDetailsBtn';
import SunIcon from '../../assets/icons/icon-sun.svg';
import MoonIcon from '../../assets/icons/icon-moon.svg';
import LoadingBar from './LoadingBar';

import './Clock.scss';

const Clock: React.FC<ClockProps> = ({ abbreviation, city, country }) => {
	const [time, setTime] = useState('');
	const [timeAbbr, setTimeAbbr] = useState('');
	const [greeting, setGreeting] = useState('');
	const [icon, setIcon] = useState<any>();

	const clockCtx = useContext(ClockDetailsCtx);

	const dispatch = useDispatch();

	const getCurrentTime = () => {
		const date = new Date();
		let hours;
		let minutes;
		let timeOfDay;

		date.getHours() < 10
			? (hours = `0${date.getHours()}`)
			: (hours = date.getHours());

		date.getMinutes() < 10
			? (minutes = `0${date.getMinutes()}`)
			: (minutes = date.getMinutes());

		if (+hours >= 5 && +hours < 18) {
			timeOfDay = 'daytime';
			setIcon(SunIcon);
		} else {
			timeOfDay = 'nighttime';
			setIcon(MoonIcon);
		}

		dispatch(
			setHour({
				time: hours,
				timeOfDay: timeOfDay,
			})
		);

		if (+hours >= 5 && +hours < 12) {
			setGreeting('morning');
		} else if (+hours >= 12 && +hours < 18) {
			setGreeting('afternoon');
		} else {
			setGreeting('evening');
		}

		if (+hours > 12) {
			hours = +hours - 12;
			setTimeAbbr('PM');
		} else {
			setTimeAbbr('AM');
		}

		setTime(`${hours}:${minutes}`);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			getCurrentTime();
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section
			className={`clock wrapper ${
				clockCtx.isExpanded ? 'clock--expanded' : ''
			}`}
		>
			<div className='clock__top'>
				{icon ? (
					<>
						<img src={icon} alt='' aria-hidden='true' className='clock__icon' />
						<h4 className='clock__greeting'>
							Good {greeting}
							<span className='clock__greeting--current'>, it's currently</span>
						</h4>
					</>
				) : (
					<LoadingBar />
				)}
			</div>
			<div className='clock__middle'>
				{time ? (
					<>
						<h1 className='clock__time'>{time}</h1>
						<p className='clock__timezone'>{abbreviation}</p>
					</>
				) : (
					<LoadingBar />
				)}
			</div>
			<div className='clock__bottom'>
				{timeAbbr ? (
					<>
						<h3 className='clock__location'>
							<span className='clock__timeAbbr'>{timeAbbr}</span> in {city}, {country}
						</h3>
						<ClockDetailsBtn />
					</>
				) : (
					<LoadingBar />
				)}
			</div>
		</section>
	);
};

export default Clock;

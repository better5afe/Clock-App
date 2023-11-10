import ClockDetailsBtn from './ClockDetailsBtn';
import SunIcon from '../../assets/icons/icon-sun.svg';
import MoonIcon from '../../assets/icons/icon-moon.svg';

import './Clock.scss';

// dynamically change img src based on the time

const Clock = () => {
	let src = SunIcon;

	return (
			<section className='clock wrapper'>
				<div className='clock__top'>
					<img src={src} alt='' aria-hidden='true' />
					<h4>Good morning, it's currently</h4>
				</div>
				<div className='clock__middle'>
					<h1>11:37</h1>
					<p>BST</p>
				</div>
				<div className='clock__bottom'>
					<h3>In London, UK</h3>
					<ClockDetailsBtn />
				</div>
			</section>
	);
};

export default Clock;

import ClockDetailsBtn from './ClockDetailsBtn';
import SunIcon from '../../assets/icons/icon-sun.svg';
import MoonIcon from '../../assets/icons/icon-moon.svg';

import './Clock.scss';

// dynamically change img src based on the time

const Clock = () => {
	let src = SunIcon;

	return (
		<section className='clock clock--expanded wrapper'>
			<div className='clock__top'>
				<img src={src} alt='' aria-hidden='true' className='clock__icon' />
				<h4 className='clock__greeting'>Good morning<span className='clock__greeting--current'>, it's currently</span></h4>
			</div>
			<div className='clock__middle'>
				<h1 className='clock__time'>11:37</h1>
				<p className='clock__timezone'>BST</p>
			</div>
			<div className='clock__bottom'>
				<h3 className='clock__location'>In London, UK</h3>
				<ClockDetailsBtn />
			</div>
		</section>
	);
};

export default Clock;

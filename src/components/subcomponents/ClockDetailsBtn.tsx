import ArrowIcon from '../../assets/icons/icon-arrow.svg';

import './ClockDetailsBtn.scss';

const ClockDetailsBtn = () => {
	return (
		<button className='details__btn'>
			More
			<span className='details__btn-arrow'>
				<img src={ArrowIcon} alt='' aria-hidden='true' />
			</span>
		</button>
	);
};

export default ClockDetailsBtn;

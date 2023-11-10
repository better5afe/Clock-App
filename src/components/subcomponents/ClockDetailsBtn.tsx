import { useContext } from 'react';
import { ClockDetailsCtx } from '../../context/clock-details-ctx';
import ArrowIcon from '../../assets/icons/icon-arrow.svg';

import './ClockDetailsBtn.scss';

const ClockDetailsBtn = () => {
	const clockCtx = useContext(ClockDetailsCtx);

	let btnText = 'more';

	clockCtx.isExpanded && (btnText = 'less');

	return (
		<button className='details__btn' onClick={clockCtx.toggleDetailsHandler}>
			{btnText}
			<span
				className={`details__btn-arrow ${
					clockCtx.isExpanded ? 'details__btn-arrow--expanded' : ''
				}`}
			>
				<img src={ArrowIcon} alt='' aria-hidden='true' />
			</span>
		</button>
	);
};

export default ClockDetailsBtn;

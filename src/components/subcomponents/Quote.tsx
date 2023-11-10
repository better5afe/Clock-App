import { useContext } from 'react';
import { ClockDetailsCtx } from '../../context/clock-details-ctx';
import RefreshIcon from '../../assets/icons/icon-refresh.svg';

import './Quote.scss';

const Quote = () => {
	const clockCtx = useContext(ClockDetailsCtx);

	return (
		<section
			className={`quote wrapper ${
				clockCtx.isExpanded ? 'quote--expanded' : ''
			}`}
		>
			<div className='quote__container'>
				<blockquote className='quote__text'>
					“The science of operations, as derived from mathematics more
					especially, is a science of itself, and has its own abstract truth and
					value.”
				</blockquote>
				<p className='quote__author'>Ada Lovelace</p>
			</div>
			<button className='quote__btn'>
				<img
					width={16}
					src={RefreshIcon}
					alt=''
					aria-hidden={true}
					className='quote__btn-img'
				/>
			</button>
		</section>
	);
};

export default Quote;

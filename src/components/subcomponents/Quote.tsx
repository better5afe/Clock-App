import RefreshIcon from '../../assets/icons/icon-refresh.svg';

import './Quote.scss';

const Quote = () => {
	return (
		<section className='quote wrapper'>
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

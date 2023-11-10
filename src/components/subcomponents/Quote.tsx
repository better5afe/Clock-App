import { useContext, useEffect } from 'react';
import { ClockDetailsCtx } from '../../context/clock-details-ctx';
import { useQuote } from '../../hooks/useQuote';
import RefreshIcon from '../../assets/icons/icon-refresh.svg';
import LoadingBar from './LoadingBar';

import './Quote.scss';

const Quote = () => {
	const clockCtx = useContext(ClockDetailsCtx);

	const { quote, isLoading, error, fetchQuote } = useQuote();

	useEffect(() => {
		fetchQuote();
	}, []);

	return (
		<section
			className={`quote wrapper ${
				clockCtx.isExpanded ? 'quote--expanded' : ''
			}`}
		>
			<div className='quote__container'>
				{isLoading && <LoadingBar />}
				{!isLoading && error && (
					<p className='quote__text'>
						An error occured while loading the resource
					</p>
				)}
				{!isLoading && !error && (
					<>
						<blockquote className='quote__text'>{quote.content}</blockquote>
						<p className='quote__author'>{quote.author}</p>
					</>
				)}
			</div>
			<button className='quote__btn' onClick={() => fetchQuote()}>
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

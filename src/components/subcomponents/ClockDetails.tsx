import { useContext } from 'react';
import { ClockDetailsCtx } from '../../context/clock-details-ctx';
import ClockDetailsCard from './ClockDetailsCard';

import './ClockDetails.scss';

const ClockDetails = () => {
	const clockCtx = useContext(ClockDetailsCtx);

	return (
		<section
			className={`details details--daytime ${
				clockCtx.isExpanded ? 'details--expanded' : ''
			}`}
		>
			<div className='wrapper details__wrapper'>
				<div className='details__left'>
					<ClockDetailsCard title='current timezone' details='Europe/London' />
					<ClockDetailsCard title='Day of the year' details='295' />
				</div>
				<div className='details__right'>
					<ClockDetailsCard title='Day of the week' details='5' />
					<ClockDetailsCard title='Week number' details='42' />
				</div>
			</div>
		</section>
	);
};

export default ClockDetails;

import { useContext } from 'react';
import { ClockDetailsCtx } from '../../context/clock-details-ctx';
import { ClockDetailsProps } from '../../@types/components/component-types';
import ClockDetailsCard from './ClockDetailsCard';

import './ClockDetails.scss';

const ClockDetails: React.FC<ClockDetailsProps> = ({
	timezone,
	dayOfWeek,
	dayOfYear,
	weekNum,
	timeOfDay,
}) => {
	const clockCtx = useContext(ClockDetailsCtx);

	return (
		<section
			className={`details details--${
				timeOfDay === 'day' ? 'daytime' : 'nighttime'
			} ${clockCtx.isExpanded ? 'details--expanded' : ''}`}
		>
			<div className='wrapper details__wrapper'>
				<div className='details__left'>
					<ClockDetailsCard title='current timezone' details={timezone} />
					<ClockDetailsCard title='Day of the year' details={dayOfYear} />
				</div>
				<div className='details__right'>
					<ClockDetailsCard title='Day of the week' details={dayOfWeek} />
					<ClockDetailsCard title='Week number' details={weekNum} />
				</div>
			</div>
		</section>
	);
};

export default ClockDetails;

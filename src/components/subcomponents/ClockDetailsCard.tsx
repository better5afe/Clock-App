import { ClockDetailsCardProps } from '../../@types/components/component-types';

import './ClockDetailsCard.scss';

const ClockDetailsCard: React.FC<ClockDetailsCardProps> = ({
	title,
	details,
}) => {
	return (
		<div className='card'>
			<h5 className='card__title'>{title}</h5>
			<h2 className='card__details'>{details}</h2>
		</div>
	);
};

export default ClockDetailsCard;

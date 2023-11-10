import ClockDetailsCard from './ClockDetailsCard';

import './ClockDetails.scss';

const dummyCards = [
	{
		id: 1,
		className: 'timezone',
		title: 'current timezone',
		details: 'Europe/London',
	},
	{
		id: 2,
		className: 'week-day',
		title: 'day of the week',
		details: '5',
	},
	{
		id: 3,
		className: 'year-day',
		title: 'day of the year',
		details: '295',
	},
	{
		id: 4,
		className: 'week-number',
		title: 'week number',
		details: '42',
	},
];

const ClockDetails = () => {
	return (
		<section className='details wrapper'>
			{dummyCards.map((card, idx) => (
				<ClockDetailsCard
					key={idx}
					id={card.id}
					className={card.className}
					title={card.title}
					details={card.details}
				/>
			))}
		</section>
	);
};

export default ClockDetails;

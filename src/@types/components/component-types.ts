export interface ChildrenProps {
	children: React.ReactNode;
}

export interface ClockDetailsCtxProps {
	isExpanded: boolean;
	toggleDetailsHandler: () => void;
}

export interface ClassNameProps {
	className: string;
}

export interface LocationState {
	country: string;
	city: string;
}


interface TimeDetails {
	timezone: string;
	dayOfWeek: number;
	dayOfYear: number;
	weekNum: number;
}

export interface TimeState extends TimeDetails {
	abbreviation: string;
}

export interface ClockDetailsCardProps {
	title: string;
	details: string | number;
}

export interface ClockDetailsProps extends TimeDetails {
	timeOfDay: string;
}

export interface ClockProps {
	abbreviation: string;
}

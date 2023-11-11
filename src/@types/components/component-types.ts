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

interface RequestState {
	isLoading: boolean;
	isError: boolean;
}

interface LocationObj {
	country: string;
	city: string;
}

export interface LocationState extends LocationObj, RequestState {}

interface TimeDetails {
	timezone: string;
	dayOfWeek: number;
	dayOfYear: number;
	weekNum: number;
}

interface TimeObj extends TimeDetails {
	abbreviation: string;
}

export interface TimeState extends TimeObj, RequestState {}

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

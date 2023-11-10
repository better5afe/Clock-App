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

export interface ClockDetailsCardProps {
	title: string;
	details: string;
}
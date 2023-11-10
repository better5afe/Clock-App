import { useState } from 'react';
import { ClockDetailsCtx } from './clock-details-ctx';
import { ChildrenProps } from '../@types/components/component-types';

export const ClockDetailsCtxProvider: React.FC<ChildrenProps> = ({
	children,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleDetailsHandler = () => {
		setIsExpanded((prevState) => {
			return !prevState;
		});
	};

	return (
		<ClockDetailsCtx.Provider
			value={{
				isExpanded: isExpanded,
				toggleDetailsHandler: toggleDetailsHandler,
			}}
		>
			{children}
		</ClockDetailsCtx.Provider>
	);
};

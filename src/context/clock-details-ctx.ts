import React from 'react';
import { ClockDetailsCtxProps } from '../@types/components/component-types';

export const ClockDetailsCtx = React.createContext<ClockDetailsCtxProps>({
	isExpanded: false,
	toggleDetailsHandler: () => {},
});

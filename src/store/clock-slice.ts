import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { LocationState, TimeState } from '../@types/components/component-types';

const initialState = {
	country: '',
	city: '',
	time: '',
	timeOfDay: '',
	timezone: '',
	abbreviation: '',
	dayOfWeek: 0,
	dayOfYear: 0,
	weekNum: 0,
	isLoading: false,
	isError: false,
};
const clockSlice = createSlice({
	name: 'clock',
	initialState,
	reducers: {
		getLocationData: (state, action: PayloadAction<LocationState>) => {
			state.country = action.payload.country;
			state.city = action.payload.city;
			state.isLoading = action.payload.isLoading;
			state.isError = action.payload.isError;
		},
		setHour: (state, action) => {
			state.time = action.payload.time;
			state.timeOfDay = action.payload.timeOfDay
		},
		getTimeData: (state, action: PayloadAction<TimeState>) => {
			state.timezone = action.payload.timezone;
			state.abbreviation = action.payload.abbreviation;
			state.dayOfWeek = action.payload.dayOfWeek;
			state.dayOfYear = action.payload.dayOfYear;
			state.weekNum = action.payload.weekNum;
			state.isLoading = action.payload.isLoading;
			state.isError = action.payload.isError;
		},
	},
});

export const { getLocationData, getTimeData, setHour } = clockSlice.actions;
export default clockSlice.reducer;

// export const fetchLocation = () => {
// 	return async (dispatch: ThunkDispatch<LocationState, unknown, AnyAction>) => {
// 		dispatch(
// 			getLocationData({
// 				country: '',
// 				city: '',
// 				isLoading: true,
// 				isError: false,
// 			})
// 		);

// 		try {
// 			const res = await fetch('https://api.ipify.org?format=json');

// 			if (res.ok) {
// 				const data = await res.json();
// 				const userIP = data.ip;

// 				try {
// 					const res = await fetch(
// 						`https://api.ipbase.com/v2/info?apikey=${process.env.REACT_APP_API_KEY}&ip=${userIP}`
// 					);

// 					if (res.ok) {
// 						const locationData = await res.json();
// 						dispatch(
// 							getLocationData({
// 								country: locationData.data.location.country.name,
// 								city: locationData.data.location.city.name,
// 								isLoading: false,
// 								isError: false,
// 							})
// 						);
// 					} else {
// 						dispatch(
// 							getLocationData({
// 								country: '',
// 								city: '',
// 								isLoading: false,
// 								isError: true,
// 							})
// 						);
// 					}
// 				} catch (err) {
// 					dispatch(
// 						getLocationData({
// 							country: '',
// 							city: '',
// 							isLoading: true,
// 							isError: false,
// 						})
// 					);
// 				}
// 			}
// 		} catch (err) {
// 			dispatch(
// 				getLocationData({
// 					country: '',
// 					city: '',
// 					isLoading: true,
// 					isError: false,
// 				})
// 			);
// 		}
// 	};
// };

export const fetchTime = () => {
	return async (dispatch: ThunkDispatch<TimeState, unknown, AnyAction>) => {
		try {
			const res = await fetch(`http://worldtimeapi.org/api/ip`);

			if (res.ok) {
				const timeData = await res.json();

				dispatch(
					getTimeData({
						timezone: timeData.timezone,
						abbreviation: timeData.abbreviation,
						dayOfWeek: timeData.day_of_week,
						dayOfYear: timeData.day_of_year,
						weekNum: timeData.week_number,
						isLoading: false,
						isError: false,
					})
				);
			} else {
				dispatch(
					getTimeData({
						timezone: '',
						abbreviation: '',
						dayOfWeek: 0,
						dayOfYear: 0,
						weekNum: 0,
						isLoading: false,
						isError: true,
					})
				);
			}
		} catch (err) {
			dispatch(
				getTimeData({
					timezone: '',
					abbreviation: '',
					dayOfWeek: 0,
					dayOfYear: 0,
					weekNum: 0,
					isLoading: false,
					isError: true,
				})
			);
		}
	};
};

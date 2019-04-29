import { SET_FORECAST_DATA } from '../actions/';

export const cities = (state = {}, action) => {
    switch(action.type) {
        case SET_FORECAST_DATA:
            const { city, forecastData } = action.payload;
            const name_city = `${city.city},${city.country}`;

            return { ...state, [name_city]: { forecastData } };
        
        default:
            return state;
    }
};
import { createSelector } from 'reselect';
import { toPairs } from 'lodash';

import { SET_FORECAST_DATA, GET_WEATHER_CITY, SET_WEATHER_CITY } from '../actions/';

export const cities = (state = {}, action) => {
    switch(action.type) {
        case SET_FORECAST_DATA: {
            const { city, forecastData } = action.payload;
            const name_city = `${city.city},${city.country}`;

            return { ...state, [name_city]: { ...state[name_city], forecastData, forecastDataDate: new Date() } };
        }
        case GET_WEATHER_CITY: {
            const city = action.payload;
            const name_city = `${city.city},${city.country}`;

            return { ...state, [name_city]: { ...state[name_city], weather: null } }
        }
        case SET_WEATHER_CITY: {
            const { city, weather } = action.payload;
            const name_city = `${city.city},${city.country}`;

            return { ...state, [name_city]: { ...state[name_city], weather } };
        }
        default:
            return state;
    }
};

// Implement selectors
export const getForecastDataFromCities = createSelector((state, city) => {
    const name_city = `${city.city},${city.country}`;
    
    return state[name_city] && state[name_city].forecastData;
}, forecastData => forecastData);

const fromObjectToArray = cities => toPairs(cities).map(([key, value]) => {
    let city_obj = key.split(",");
    city_obj = {
        city: city_obj[0],
        country: city_obj[1]
    };
    
    return {
        key,
        city: city_obj,
        data: value.weather
    };
});

export const getWeatherCities = createSelector(state => fromObjectToArray(state), cities => cities);
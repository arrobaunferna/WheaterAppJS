// Services
import transformForecast from '../services/TransformForecast';
import getUrl from '../services/URLApi';

export const SET_CITY = 'SET_CITY';
const setCity = payload => ({ type: SET_CITY, payload });

export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

export const setSelectedCity = payload => { 
    return dispatch => {
        const url_forecast = getUrl('forecast', payload.city + ',' + payload.country);

        dispatch(setCity(payload));

        // Searching data. Activate in the State
        return fetch( url_forecast )
            .then(res => res.json())
            .catch(error => console.log(`Error :)\n${error}`))
            .then(response => {
                const forecastData = transformForecast(response);
                
                // Update state with result of promise
                dispatch(setForecastData({city: payload, forecastData}))
            });
    };
};
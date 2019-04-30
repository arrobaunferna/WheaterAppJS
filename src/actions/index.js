// Services
import transformForecast from '../services/TransformForecast';
import getUrl from '../services/URLApi';
import transformWeather from '../services/TransformWeather';

export const SET_CITY = 'SET_CITY';
const setCity = payload => ({ type: SET_CITY, payload });

export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

export const setSelectedCity = payload => { 
    return (dispatch, getState) => {
        const name_city =  payload.city + ',' + payload.country;
        const url_forecast = getUrl('forecast', name_city);

        dispatch(setCity(payload));
        
        const state = getState();
        const date = state.cities[name_city] && state.cities[name_city].forecastDataDate;
        const now = new Date();

        // If the request was made less than 1 minute ago, then the fetch is not performed
        if( !(date && (now - date) < (1 * 60 * 1000)) ) {
            // Searching data. Activate in the State
            return fetch( url_forecast )
                .then(res => res.json())
                .catch(error => console.log(`Error :)\n${error}`))
                .then(response => {
                    const forecastData = transformForecast(response);
                    
                    // Update state with result of promise
                    dispatch(setForecastData({city: payload, forecastData}))
                });
        }
    };
};

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });

export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';
export const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {
            const name_city = city.city + ',' + city.country;

            dispatch(getWeatherCity(city));

            fetch(getUrl('weather', name_city ))
            .then(res => res.json())
            .catch(error => console.error("Hola :) Error:", error))
            .then(response => {
                try {
                    if(response.cod === "404") {
                        throw new Error("Esta ciudad no existe!");
                    }

                    const weather = transformWeather(response);                    
                    
                    dispatch(setWeatherCity({ city, weather: weather.data }));
                } catch(error) {
                    console.log(error);                
                }            
            });
        });
    }
};
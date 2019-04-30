import React from 'react';
import PropTypes from 'prop-types';

// Components
import Location from './Location';
import WeatherData from './WeatherData';

// UI
import CircularProgress from '@material-ui/core/CircularProgress';

import "./styles.css";
/*
// Find data
        const city = this.state.city + ',' + this.state.country;
        fetch(getUrl('weather', city ))
        .then(res => res.json())
        .catch(error => console.error("Hola :) Error:", error))
        .then(response => {
            try {
                if(response.cod === "404") {
                    throw new Error("Esta ciudad no existe!");
                }

                const weather_info = transformWeather(response);
                
                this.setState({
                    data: weather_info.data
                });
            } catch(error) {
                console.log(error);                
            }            
        });
*/

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
    <div className="wheaterLocationCont" onClick={onWeatherLocationClick}>
        <Location city={ city.city } />
        { data ? <WeatherData data={ data } /> : <CircularProgress size={60} /> }
    </div>
);

WeatherLocation.propTypes = {
    city: PropTypes.object.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
};
export default WeatherLocation;
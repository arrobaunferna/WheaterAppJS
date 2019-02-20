import React from 'react';
import PropTypes from 'prop-types';

import WeatherTempereature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

import "./styles.css";

const WeatherData = ({ data: { temperature, weatherState, humidity, wind } }) => {
    return (
        <div className="weatherDataCont">
            <WeatherTempereature temperature={ temperature } weatherState={ weatherState } />
            <WeatherExtraInfo humidity={ humidity } wind={ wind } />
        </div>
    );
};

WeatherData.propTypes = { 
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
};

export default WeatherData;
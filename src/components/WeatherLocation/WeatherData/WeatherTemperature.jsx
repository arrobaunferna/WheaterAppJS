import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

const getWeatherIcon = weatherState => {
    const iconSize = "4x";
    return <WeatherIcons className="wicon" name={weatherState} size={iconSize} />
};

const WeatherTemperature = (props) => (
    <div className="weatherTemperatureCont">
        { getWeatherIcon(props.weatherState) }
        <span className="temperature">{ props.temperature }°</span>
        <span className="temperatureType">C</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
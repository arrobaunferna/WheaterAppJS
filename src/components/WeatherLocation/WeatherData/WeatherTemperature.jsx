import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

const icons = {
    cloud: "cloud",
    cloudy: "cloudy",
    sun: "day-sunny",
    fog: "day-fog",
    rain: "rain",
    snow: "snow",
    windy: "windy",
};

const getWeatherIcon = weatherState => {
    return <WeatherIcons name={ icons[weatherState] || icons.sun } size="2x" />
};

const WeatherTemperature = (props) => (
    <div className="weatherTemperatureCont">
        { getWeatherIcon(props.weatherState) }
        <span>{ props.temperature }°C</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
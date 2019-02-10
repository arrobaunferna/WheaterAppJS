import React from 'react';
import WeatherTempereature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = () => (
    <div>
        <WeatherTempereature />
        <WeatherExtraInfo humidity={70} wind="10 Km/h" />
    </div>
);

export default WeatherData;
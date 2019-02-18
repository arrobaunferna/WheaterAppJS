import React from 'react';
import WeatherTempereature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

import "../styles.css";

const WeatherData = () => (
    <div className="weatherDataCont">
        <WeatherTempereature temperature={32} weatherState="sun" />
        <WeatherExtraInfo humidity={70} wind="10 Km/h" />
    </div>
);

export default WeatherData;
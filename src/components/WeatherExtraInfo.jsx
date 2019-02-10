import React from 'react';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div>
        <span>{ humidity }% </span>
        <span>{ wind }</span>
    </div>
);

export default WeatherExtraInfo;
import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city="Barranquilla,co" />
        <WeatherLocation city="Bucaramanga,co" />
        <WeatherLocation city="Bogota,co" />
        <WeatherLocation city="Santa Marta,co" />
        <WeatherLocation city="Buenos Aires,ar" />
        <WeatherLocation city="London,uk" />
        <WeatherLocation city="San Francisco,us" />
        <WeatherLocation city="Washington,us" />
    </div>
);

export default LocationList;
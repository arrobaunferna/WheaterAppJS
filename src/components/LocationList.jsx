import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import WeatherLocation from './WeatherLocation';

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };

    return (
        <div className="locationList">{ 
            cities.map((city, idx) => { 
                return <WeatherLocation 
                    city={city} 
                    key={idx}
                    onWeatherLocationClick={() => handleWeatherLocationClick(city)} 
                />;
            })
        }</div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};
export default LocationList;
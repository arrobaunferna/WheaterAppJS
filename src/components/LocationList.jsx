import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import WeatherLocation from './WeatherLocation';

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        onSelectedLocation(city);
    };

    return (
        <div className="locationList">{ 
            cities.map(city => {                 
                return <WeatherLocation 
                    city={city.city} 
                    key={city.key}
                    onWeatherLocationClick={() => handleWeatherLocationClick(city.city)}
                    data={city.data}
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
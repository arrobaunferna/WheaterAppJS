import React from 'react';
import PropTypes from 'prop-types';

import WeatherLocation from './WeatherLocation';

const LocationList = ({ cities }) => (
    <div>
        { cities.map(city => <WeatherLocation city={city} />) }
    </div>
);

LocationList.propTypes = {
    cities: PropTypes.array.isRequired
};
export default LocationList;
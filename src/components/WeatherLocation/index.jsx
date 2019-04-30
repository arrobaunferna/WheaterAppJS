import React from 'react';
import PropTypes from 'prop-types';

// Components
import Location from './Location';
import WeatherData from './WeatherData';

// UI
import CircularProgress from '@material-ui/core/CircularProgress';
import "./styles.css";

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
    <div className="wheaterLocationCont" onClick={onWeatherLocationClick}>
        <Location city={ city.city } />
        { data ? <WeatherData data={ data } /> : <CircularProgress size={60} /> }
    </div>
);

WeatherLocation.propTypes = {
    city: PropTypes.object.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
};
export default WeatherLocation;
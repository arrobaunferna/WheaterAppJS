import React from 'react';
import PropTypes from 'prop-types';

// Components
import ForecastItem from './ForecastItem/';

// UI
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

const renderForecastItemDays = forecastData => {
    return forecastData.map(forecast => {
        return <ForecastItem 
            key={forecast.weekDay + forecast.hour} 
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data.data} 
        />;
    });
}

const ForecastExtended = ({ city, forecastData }) => (
    <div>
        <h3 className="forecastTitle">Pronostico Extendido para { city.city }</h3>
        { forecastData ? renderForecastItemDays(forecastData) : <CircularProgress size={60} /> }
    </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.object.isRequired,
    forecastData: PropTypes.array
}

export default ForecastExtended;
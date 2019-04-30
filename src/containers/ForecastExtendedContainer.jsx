import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Selectors
import { getForecastDataFromCities, getCity } from '../reducers/';


// Components
import ForecastExtended from '../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        const { forecast_city, forecastData } = this.props;

        return (
            Object.keys(forecast_city).length ? <ForecastExtended city={forecast_city} forecastData={forecastData} /> : <h3>Selecciona una ciudad...</h3>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    forecast_city: PropTypes.object.isRequired,
    forecastData: PropTypes.array
};

const mapStateToProps = state => {
    return {
        forecast_city: getCity(state),
        forecastData: getForecastDataFromCities(state)
    };
};

export default connect(mapStateToProps, null)(ForecastExtendedContainer);
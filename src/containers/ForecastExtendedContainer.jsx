import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

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
    const city_key = `${state.city.city},${state.city.country}`;
    return {
        forecast_city: state.city,
        forecastData: state.cities[city_key] && state.cities[city_key].forecastData
    };
};

export default connect(mapStateToProps, null)(ForecastExtendedContainer);
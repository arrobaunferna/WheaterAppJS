import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

// Components
import ForecastExtended from '../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props.forecast_city ? <ForecastExtended city={ this.props.forecast_city } /> : <h3>Selecciona una ciudad...</h3>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    forecast_city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    forecast_city: state.city
});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);
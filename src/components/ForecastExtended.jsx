import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class ForecastExtended extends Component {
    render() {
        const { city } = this.props;
        return (
            <div>
                <h3 className="forecastTitle">Pronostico Extendido para { city.city }</h3>
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.object.isRequired,
}

export default ForecastExtended;
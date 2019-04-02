import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import ForecastItem from './ForecastItem/';

// Services
import transformForecast from '../services/TransformForecast';
import getUrl from '../services/URLApi';

// UI
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

class ForecastExtended extends Component {
    constructor() {
        super();

        this.state = { forecastData: null };
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {        
        if( nextProps.city !== this.props.city ) {
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = getUrl('forecast', city.city + ',' + city.country);

        fetch( url_forecast )
        .then(res => res.json())
        .catch(error => console.log(`Error :)\n${error}`))
        .then(response => {
            const forecastData = transformForecast(response);
            this.setState({ forecastData });
        });
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => {
            return <ForecastItem 
                key={forecast.weekDay + forecast.hour} 
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data.data} 
            />;
        });
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h3 className="forecastTitle">Pronostico Extendido para { city.city }</h3>
                { forecastData ? this.renderForecastItemDays(forecastData) : <CircularProgress size={60} /> }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.object.isRequired,
}

export default ForecastExtended;
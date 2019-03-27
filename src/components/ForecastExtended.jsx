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

const days = [
    'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'
];
const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'cloud',
    wind: '10 m/s'
};

class ForecastExtended extends Component {
    constructor() {
        super();

        this.state = { forecastData: null };
    }

    componentDidMount() {
        const { city } = this.props;
        const url_forecast = getUrl('forecast', city.city + ',' + city.country);

        fetch( url_forecast )
        .then(res => res.json())
        .catch(error => console.log(`Error :)\n${error}`))
        .then(response => {
            console.log(response);
            const forecastData = transformForecast(response);
            console.log(forecastData);
            this.setState({ forecastData });
        });
    }

    renderForecastItemDays() {
        return 'render items';
        // return days.map(day => { 
        //     return <ForecastItem 
        //         key={day} 
        //         weekDay={day} 
        //         hour={10} 
        //         data={data} 
        //     />;
        // });
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h3 className="forecastTitle">Pronostico Extendido para { city.city }</h3>
                { forecastData ? this.renderForecastItemDays() : <CircularProgress size={60} /> }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.object.isRequired,
}

export default ForecastExtended;
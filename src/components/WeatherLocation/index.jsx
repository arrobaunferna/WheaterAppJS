import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Location from './Location';
import WeatherData from './WeatherData';

// Services
import transformWeather from '../../services/TransformWeather';
import getUrl from '../../services/URLApi';

// UI
import CircularProgress from '@material-ui/core/CircularProgress';

import "./styles.css";

class WeatherLocation extends Component {
    constructor(props) {
        super(props);

        const { city, country } = props.city;
        this.state = {
            city,
            country,
            data: null
        }        
    }
    
    componentDidMount() {
        this.handleUpdateClick();
    }

    handleUpdateClick = () => {
        // Find data
        const city = this.state.city + ',' + this.state.country;
        fetch(getUrl('weather', city ))
        .then(res => res.json())
        .catch(error => console.error("Hola :) Error:", error))
        .then(response => {
            try {
                if(response.cod === "404") {
                    throw new Error("Esta ciudad no existe!");
                }

                const weather_info = transformWeather(response);
                
                this.setState({
                    data: weather_info.data
                });
            } catch(error) {
                console.log(error);                
            }            
        });
    }

    render() {
        const { onWeatherLocationClick } = this.props;
        const {city, data} = this.state; 
        return (
            <div className="wheaterLocationCont" onClick={onWeatherLocationClick}>
                <Location city={ city } />
                { data ? <WeatherData data={ data } /> : <CircularProgress size={60} /> }
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.object.isRequired,
    onWeatherLocationClick: PropTypes.func,
};
export default WeatherLocation;
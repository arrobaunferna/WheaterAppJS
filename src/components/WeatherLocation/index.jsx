import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Location from './Location';
import WeatherData from './WeatherData';

// Services
import transformWeather from '../../services/TransformWeather';
import getUrlWeather from '../../services/UrlWeatherByCity';

// UI
import CircularProgress from '@material-ui/core/CircularProgress';

import "./styles.css";

class WeatherLocation extends Component {
    constructor(props) {
        super(props);

        const { city } = props;
        this.state = {
            city,
            data: null
        }        
    }
    
    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }
    
    handleUpdateClick = () => {
        // Find data
        fetch(getUrlWeather( this.state.city ))
        .then(res => res.json())
        .catch(error => console.error("Hola :) Error:", error))
        .then(response => {
            try {
                if(response.cod === "404") {
                    throw new Error("Esta ciudad no existe!");
                }

                const weather_info = transformWeather(response);
                
                this.setState({
                    city: weather_info.city,
                    data: weather_info.data
                });
            } catch(error) {
                console.log(error);                
            }            
        });
    }

    render() {
        const {city, data} = this.state; 
        return(
            <div className="wheaterLocationCont">
                <Location city={ city } />
                { data ? <WeatherData data={ data } /> : <CircularProgress size={60} /> }
            </div>
        );
    }
}

WeatherLocation.PropTypes = {
    city: PropTypes.string.isRequired
};
export default WeatherLocation;
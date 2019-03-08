import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/TransformWeather';

import { API_URL } from '../../constants/api_url';

import "./styles.css";

class WeatherLocation extends Component {
    constructor() {
        super();

        this.state = {
            city: 'Barranquilla',
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
        fetch(API_URL)
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
                { data ? <WeatherData data={ data } /> : "Cargando..." }
            </div>
        );
    }
}

export default WeatherLocation;
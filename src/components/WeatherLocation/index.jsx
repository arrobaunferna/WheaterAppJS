import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

import "./styles.css";

const location = "Barranquilla,co";
const api_key = "b5988a9eed11776f8a76ec78a305c843";
const url_base = "http://api.openweathermap.org/data/2.5/weather";
const api_url = `${url_base}?q=${location}&appid=${api_key}`;

class WeatherLocation extends Component {
    constructor() {
        super();

        this.state = {
            city: 'Barranquilla',
            data: {
                temperature: 32,
                weatherState: 'sun',
                humidity: 10,
                wind: "40 Km/h"
            }
        }
    }

    handleUpdateClick = () => {
        // Find data
        fetch(api_url)
        .then(res => res.json())
        .catch(error => console.error("Error:", error))
        .then(response => console.log(response));

        this.setState({
            data: {
                temperature: 18,
                weatherState: 'wind',
                humidity: 10,
                wind: "47 Km/h"
            }
        });

        console.log("Actualizado");
    }

    render() {
        const {city, data} = this.state; 
        return(
            <div className="wheaterLocationCont">
                <Location city={ city } />
                <WeatherData data={ data } />
                <button onClick={ this.handleUpdateClick } >Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;
import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

import "./styles.css"

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
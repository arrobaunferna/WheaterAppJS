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

    getWeatherState = weather_data => {
        return 'sun';
    }

    getTemp = (temp, from, to) => {
        let result = 0;
        try {
            if(from.toLowerCase() === to.toLowerCase()) {
                throw new Error("Las temperaturas son iguales!");
            }

            switch(from) {
                case 'K':
                case 'k':
                    // Default convert to Celsius
                    result = temp - 273.15;
                    if(to === "F" || to === "f") {
                        result = result * (5 / 9) + 32;
                    }
                break;
    
                case 'F':
                case 'f':
                    // Default convert to Celsius
                    result = (temp - 32) * (5 / 9);
    
                    // Convert to Kelvin
                    if(to === "K" || to === "k") {
                        result = result + 273.15;
                    }
                break;
    
                case 'C':
                case 'c':
                    if(to === "F" || to === "f") {
                        result = temp * (9 / 5) + 32;
                    
                    } else if(to === "K" || to === "k") {
                        result = temp + 273.15;
                    }
                break;
    
                default:
                    result = 0;
                break;
            }
        } catch(err) {
            console.error(err);

        } finally {
            return Number( result.toFixed(2) );
        }

    };

    getData = weather_data => {
        const { name } = weather_data;        
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weather_state = this.getWeatherState(weather_data);

        // The temperature provided by the API is in degrees Kelvin, then we convert it to degrees Celsius.
        const data = {
            temperature: this.getTemp(temp, "K", "C"),
            weatherState: weather_state,
            humidity,
            wind: `${speed} m/s`
        };

        const response = {
            city: name,
            data
        };

        return response;
    }

    handleUpdateClick = () => {
        // Find data
        fetch(api_url)
        .then(res => res.json())
        .catch(error => console.error("Hola :) Error:", error))
        .then(response => {
            try {
                if(response.cod === "404") {
                    throw new Error("Esta ciudad no existe!");
                }
                const weather_info = this.getData(response);
                
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
                <WeatherData data={ data } />
                <button onClick={ this.handleUpdateClick } >Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;
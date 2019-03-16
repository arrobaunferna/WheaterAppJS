import React, { Component } from 'react';
import './App.css';

import LocationList from './components/LocationList';

const cities = [
    {city: "Barranquilla", country: "co"},
    {city: "Bucaramanga", country: "co"},
    {city: "Bogota", country: "co"},
    {city: "Santa Marta", country: "co"},
    {city: "Buenos Aires", country: "ar"},
    {city: "London", country: "uk"},
    {city: "San Francisco", country: "us"},
    {city: "Washington", country: "us"},
    {city: "Lima", country: "pe"},
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>WeatherApp</h1>

                <LocationList cities={cities} />
            </div>
        );
    }
}

export default App;
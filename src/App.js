import React, { Component } from 'react';
import './App.css';

import WeatherLocation from './components/WeatherLocation';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>WeatherApp</h1>

                <WeatherLocation />
            </div>
        );
    }
}

export default App;
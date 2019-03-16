import React, { Component } from 'react';
import './App.css';

import LocationList from './components/LocationList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>WeatherApp</h1>

                <LocationList />
            </div>
        );
    }
}

export default App;
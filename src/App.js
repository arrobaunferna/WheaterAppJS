import React, { Component } from 'react';

// Styles
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';

import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

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
    constructor() {
        super();
        
        this.state = {
            forecast_city: null
        }
    }

    handleSelectedLocation = city => {
        this.setState({
            forecast_city: city
        });
    }

    Forecast = () => {
        if(this.state.forecast_city) {
            return <ForecastExtended city={ this.state.forecast_city } />
        
        } else {
            return <h3>Selecciona una ciudad...</h3>
        }
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <AppBar position='sticky'>
                        <Toolbar>
                            <Typography variant='title' color='inherit'>WeatherApp</Typography>
                        </Toolbar>
                    </AppBar>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6}>
                        <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
                    </Col>

                    <Col xs={12} sm={12} md={6}>
                        <Paper zdepth={4}>
                            <div className="details">
                                { this.Forecast() }
                            </div>
                        </Paper>
                    </Col>
                </Row>
            </Grid>
        );  
    }
}

export default App;
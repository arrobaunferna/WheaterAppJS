import React, { Component } from 'react';

// Styles
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';

// Components
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import LocationListContainer from './containers/LocationListContainer';

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
                        <LocationListContainer cities={cities} />
                    </Col>

                    <Col xs={12} sm={12} md={6}>
                        <Paper zdepth={4}>
                            <div className="details">
                                <ForecastExtendedContainer />
                            </div>
                        </Paper>
                    </Col>
                </Row>
            </Grid>
        );  
    }
}

export default App;
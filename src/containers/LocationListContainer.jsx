import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import LocationList from '../components/LocationList';

// Actions
import { setSelectedCity, setWeather } from '../actions/';

// Selectors
import { getWeatherCities, getCity } from '../reducers';

class LocationListContainer extends Component {   
    componentDidMount() {
        this.props.setWeather(this.props.cities);
        this.props.setCity(this.props.city);
    }
    
    handleSelectedLocation = city => {
        this.props.setCity(city);
    }

    render() {
        return (
            <LocationList cities={this.props.citiesWeather} onSelectedLocation={this.handleSelectedLocation} />
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array.isRequired,
    city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});

const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
});


export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
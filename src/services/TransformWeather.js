import STATE from '../constants/weather-state';

const getWeatherState = weather => {
    const { id } = weather;

    if(id < 300) {
        return STATE.thunder;
    
    } else if(id < 500) {
        return STATE.drizzle;
    
    } else if(id < 600) {
        return STATE.rain;
    
    } else if(id < 700) {
        return STATE.snow;
    
    } else if(id === 800) {
        return STATE.sun;
    
    } else {
        return STATE.cloud;
    }
}

const getTemp = (temp, from, to) => {
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

const transformWeather = weather_data => {
    const { name } = weather_data;        
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weather_state = getWeatherState(weather_data.weather[0]);

    // The temperature provided by the API is in degrees Kelvin, then we convert it to degrees Celsius.
    const data = {
        temperature: getTemp(temp, "K", "C"),
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

export default transformWeather;
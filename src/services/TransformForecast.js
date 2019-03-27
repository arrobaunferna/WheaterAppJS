import moment from 'moment';
import 'moment/locale/es';

import transformWeather from './TransformWeather';

const transformForecast = data => {
    return data.list.filter(item => {
        let hours = [6, 12, 18];
        return hours.indexOf( moment.unix( item.dt ).utc().hour() ) >= 0;
    }).map(item => ({
        weekDay: moment.unix( item.dt ).format('ddd'),
        hour: moment.unix( item.dt ).utc().hour(),
        data: transformWeather(item)
    }));
};

export default transformForecast;
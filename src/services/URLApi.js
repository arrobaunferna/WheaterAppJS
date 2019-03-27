import { api_key, url_base } from '../constants/api_url';

const getUrl = (request, city) => {
    return `${url_base + request}?q=${city}&appid=${api_key}`;
};

export default getUrl;
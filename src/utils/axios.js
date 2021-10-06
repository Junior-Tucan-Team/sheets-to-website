import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.jotform.com',
});

let apiKey = '';

export const setApiKey = (appKey) => {
    apiKey = appKey;
};

instance.interceptors.request.use((config) => {
    // eslint-disable-next-line no-param-reassign
    config.params = {
        ...config.params,
        apiKey
    };
    return config;
    }, (error) =>
    // Do something with request error
     Promise.reject(error));

export default instance;

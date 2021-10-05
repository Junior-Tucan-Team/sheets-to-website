import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.jotform.com/',
});

let apiKey = '';

export const setApiKey = (appKey) => {
    apiKey = appKey;
};

axios.interceptors.request.use((config) => {
    const newConfig = {
        ...config,
        params: {
            ...config.params,
            apiKey
        },
    };
    return newConfig;
    }, (error) =>
    // Do something with request error
     Promise.reject(error));

export default instance;

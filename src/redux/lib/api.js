import axios from 'axios';

export const login = (payload) => axios.post(`https://api.jotform.com/user/login?username=${payload.email}&password=${payload.password}`,
    {
        ...payload,
        appName: 'sheets2website',
        access: 'full',
    })
    .then(response => response).catch((e) => e);

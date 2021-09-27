import axios from 'axios';

export const login = (payload) => axios.post(`https://api.jotform.com/user/login?username=${payload.email}&password=${payload.password}`,
    {
        ...payload,
        appName: 'sheets2website',
        access: 'full',
    })
    .then(response => response).catch((e) => e);

export const getUserForms = async () => (axios.get('https://api.jotform.com/user/forms?apiKey=d94f2beff24e95ad276a695b34b43e7d')
.then((res) => res.data.content));

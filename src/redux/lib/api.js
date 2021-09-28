import axios from 'axios';

export const login = (payload) => axios.post(`https://api.jotform.com/user/login?username=${payload.email}&password=${payload.password}`,
    {
        ...payload,
        appName: 'sheets2website',
        access: 'full',
    })
    .then(response => response).catch((e) => e);

export const getUserForms = async () => (axios.get('https://api.jotform.com/user/forms?apiKey=480339cbba3edb9e8cd1e82ee8bfafec')
.then((res) => res.data.content));

export const getFormSubmissions = async (payload) => (axios.get('https://api.jotform.com/user/submissions?apiKey=480339cbba3edb9e8cd1e82ee8bfafec')
.then((res) => res.data.content)
.then((res) => res.filter((e) => e.form_id === payload)));

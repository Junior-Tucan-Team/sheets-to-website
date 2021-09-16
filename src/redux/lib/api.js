import axios from 'axios';

export const login = (email, password) => axios.get(`https://api.jotform.com/user/login?username=${email}&password=${password}`)
    .then((res) => {
        console.log(res);
    }).catch((e) => console.log(e));

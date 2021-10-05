import axios from '../../utils/axios';


export const login = (credentials) => axios.post('/user/login', credentials)
    .then(response => response).catch((e) => e);

export const getUserForms = async () => (axios.get('/user/forms?apiKey=480339cbba3edb9e8cd1e82ee8bfafec')
.then((res) => res.data.content));

export const getFormSubmissions = async (formID) => (axios.get('/user/submissions?apiKey=480339cbba3edb9e8cd1e82ee8bfafec')
.then((res) => res.data.content)
.then((res) => res.filter((e) => e.form_id === formID && e.status === 'ACTIVE')));

export const getFormQuestions = async (formID) => (axios.get(`/form/${formID}/questions?apiKey=480339cbba3edb9e8cd1e82ee8bfafec`)
.then((res) => res.data.content));

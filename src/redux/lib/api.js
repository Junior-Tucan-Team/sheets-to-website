import axios from '../../utils/axios';


export const login = (credentials) => axios.post('/user/login', credentials)
    .then(response => response).catch((e) => e);

export const getUserForms = async () => (axios.get('/user/forms')
.then((res) => res.data.content));

export const getFormSubmissions = async (formID) => (axios.get('/user/submissions')
.then((res) => res.data.content)
.then((res) => res.filter((e) => e.form_id === formID && e.status === 'ACTIVE')));

export const getFormQuestions = async (formID) => (axios.get(`/form/${formID}/questions`)
.then((res) => res.data.content));

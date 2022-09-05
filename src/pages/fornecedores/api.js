import axios from 'axios';

const baseURL = 'https://restaurante-api-m4.herokuapp.com';
// cria uma conexão
const api = axios.create({
baseURL,
timeout: 1000 * 10,

});


export default api;
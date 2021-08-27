import axios from 'axios';

const url = 'http://localhost:3000/users';

const get = _ => axios.get(url);


export {get}
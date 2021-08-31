import axios from 'axios';

// axios.create({
// 	baseUrl: 'http://localhost:3001/'
// });

const baseUrl = 'http://localhost:3001';

const getAxios = path => axios.get(`${baseUrl}${path}`);

const postAxios = info => axios.post(`${baseUrl}/authors`, info);

const deleteAxios = id => axios.delete(`${baseUrl}/authors/${id}`);

const putAxios = (id, info) => axios.put(`${baseUrl}/authors/${id}`, info)

export {getAxios, postAxios, deleteAxios, putAxios}
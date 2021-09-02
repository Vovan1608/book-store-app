import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const getAxios = path => axios.get(`${baseUrl}${path}`);

const postAxios = (path ,info) => axios.post(`${baseUrl}/${path}`, info);

const deleteAxios = (path, id) => axios.delete(`${baseUrl}/${path}/${id}`);

const putAxios = (path, id, info) => axios.put(`${baseUrl}/${path}/${id}`, info);

const fetchData = async (path, cb) => {
	const response = await getAxios(path);
	cb(response.data);
}

export {getAxios, postAxios, deleteAxios, putAxios, fetchData}
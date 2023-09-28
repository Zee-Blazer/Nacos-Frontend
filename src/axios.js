import axios from 'axios';

const instance = axios.create({
    baseURL: `https://nacos-backend.onrender.com/`
})

export default instance

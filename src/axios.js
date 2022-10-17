import axios from 'axios';

const instance = axios.create({
    baseURL: `https://sleepy-earth-65067.herokuapp.com/`
})

export default instance

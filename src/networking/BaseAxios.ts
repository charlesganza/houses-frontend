import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://15.237.144.200/api',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
    }
});

export default instance;
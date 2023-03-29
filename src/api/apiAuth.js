import axios from 'axios';
import { API } from '../utils/config';


export const register = (user) => {
    return axios.post(`${API}/user/signup`, user, {
        headers: {
            'Content_type': 'application/json'
        }
    })
};

export const login = (user) => {
    return axios.post(`${API}/user/signin`, user, {
        headers: {
            'Content_type': 'application/json'
        }
    })
};
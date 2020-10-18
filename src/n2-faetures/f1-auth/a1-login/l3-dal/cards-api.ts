import axios from 'axios'
import {BACK_URL} from '../../../../n0-config/config';

const instanse = axios.create({
    baseURL: BACK_URL
});

export const authAPI = {
    login(data: any) {
        return instanse.post<any>('auth/login', data)
    }
};





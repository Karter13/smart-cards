import axios from 'axios';
import {BACK_URL} from '../../../../n0-config/config';

const instance = axios.create({
    baseURL: BACK_URL,
    withCredentials: true,
})

export const RecoverApi = {
    recover(email: string) {
        return instance.post(`auth/forgot`, {
            email,
            from: `test-front-admin <ai73a@yandex.by>`,
            message: `<div style="background-color: lime; padding: 15px">
                     password recovery link: <a href='http://localhost:3000/#/set-new-password/$token$'>
                     link</a></div>`,
        });
    },
}

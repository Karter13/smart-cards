import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
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

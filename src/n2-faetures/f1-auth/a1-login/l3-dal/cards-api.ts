import axios from 'axios'
import {BACK_URL} from '../../../../n0-config/config';

const instanse = axios.create({
    baseURL: BACK_URL,
    withCredentials: true
});

export const authAPI = {
    login(data: LoginParamsType) {
        return instanse.post<UserType>('auth/login', data)
    },
    me() {
        return instanse.post<UserType>('auth/me')
    }
};

// types for auth
export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}
export type UserType = {
    _id: string,
    email: string,
    name: string,
    avatar: string,
    publicCardPacksCount: number, // количество колод
    created: Date,
    updated: Date,
    isAdmin: boolean,
    verified: boolean, // подтвердил ли почту
    rememberMe: boolean,
    error: string,
}

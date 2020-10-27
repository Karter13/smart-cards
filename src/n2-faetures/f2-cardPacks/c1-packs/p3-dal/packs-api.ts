import axios from 'axios';
import {BACK_URL} from '../../../../n0-config/config';
import {PacksInitialStateType} from '../p2-bll/packs-reducer';

const instanse = axios.create({
    baseURL: BACK_URL,
    withCredentials: true
});

export const packsAPI = {
    getPacks(pageCount: number = 10) {
        return instanse.get<PacksInitialStateType>(`cards/pack?pageCount=${pageCount}`)
            .then(res => {
                return res.data.cardPacks;

            })
    }
}

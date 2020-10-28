import axios from 'axios';
import {BACK_URL} from '../../../../n0-config/config';
import {CreatePackType, DeletePackType, PacksInitialStateType, PackType} from '../p2-bll/packs-reducer';

const instanse = axios.create({
    baseURL: BACK_URL,
    withCredentials: true
});

export const packsAPI = {
    getPacks(pageCount: number = 50) {
        return instanse.get<PacksInitialStateType>(`cards/pack?pageCount=${pageCount}`)
            .then(res => res.data.cardPacks)
    },
    createPack(cardsPack: {name: string}) {
        return instanse.post<CreatePackType>(`cards/pack`, {cardsPack})
            .then(res => {
                return res.data.newCardsPack
            })
    },
    deletePack(id:string) {
        return instanse.delete<DeletePackType>(`cards/pack?id=${id}`)
            .then(res => {
                return res.data.deletedCardsPack
            })
    },
    updatePack(cardsPack: {id: string, name: string}) {
        return instanse.put(`cards/pack`, cardsPack)
            .then(res => {
                debugger
                console.log(res.data);
                return res.data
            })
    }
};

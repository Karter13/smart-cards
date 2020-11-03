import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addPackT, deletePackT, PackType, requestPacksT, updatePackT} from '../p2-bll/packs-reducer';
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';
import {CARDS, LEARN} from '../../../../n1-main/m1-ui/routes/Routes';
import {useHistory} from 'react-router-dom';
import {PacksTable} from './PacksTable';
import {Checkbox} from '../../../../n1-main/m1-ui/common/Checkbox/Checkbox';

export const PacksContainer = React.memo(() => {

    const packs = useSelector<AppRootStateType, Array<PackType>>(state => state.packs.cardPacks);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(requestPacksT());
    }, [dispatch]);


    const showLearnCard = useCallback((pack: PackType | Array<PackType>) => {
        !Array.isArray(pack) && history.push(LEARN + '/' + pack._id)
    }, []);

    const goToCards = useCallback((pack: PackType | Array<PackType>) => {
        !Array.isArray(pack) && history.push(CARDS + '/' + pack._id)
    }, []);

    const addPack = useCallback(() => {
        dispatch(addPackT({name: 'NEW PACK'}))
    }, []);

    const deletePack = useCallback((pack: PackType | Array<PackType>) => {
        if (!Array.isArray(pack)) {
            dispatch(deletePackT(pack._id))
        }
    }, []);

    const updatePacks = useCallback((pack: PackType | Array<PackType>) => {
        if (!Array.isArray(pack)) {
            dispatch(updatePackT({_id: pack._id, name: 'GOOD CARDS'}));
        }
    }, []);

    return (
        <div>
            <div>
                <Checkbox checkboxValue={true} changeValue={(value => console.log(value))}/>
                My Packs
            </div>
            <PacksTable packs={packs} addPack={addPack}
                        deletePack={deletePack} goToCards={goToCards}
                        updatePacks={updatePacks}
                        showLearnCard={showLearnCard}
            />
        </div>
    )
});

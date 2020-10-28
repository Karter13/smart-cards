import React, {useEffect} from 'react';
import MaterialTable from 'material-table';
import {useDispatch, useSelector} from 'react-redux';
import {addPackT, deletePackT, PackType, requestPacksT, updatePackT} from '../p2-bll/packs-reducer';
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';
import {CARDS} from '../../../../n1-main/m1-ui/routes/Routes';
import {useHistory} from 'react-router-dom';


export const SimpleAction = () => {

    const packs = useSelector<AppRootStateType, Array<PackType>>(state => state.packs.cardPacks);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(requestPacksT());
    }, [dispatch]);

    const goToCards = (pack: PackType | Array<PackType>) => {
        !Array.isArray(pack) && history.push(CARDS + '/' + pack._id)
    };

    const addPack = () => {
        dispatch(addPackT({name: 'NEW PACK'}))
    };

    const deletePack = (pack: PackType | Array<PackType>) => {
        if(!Array.isArray(pack)) {
            dispatch(deletePackT(pack._id))
        }
    };

    const updatePacks = (pack: PackType | Array<PackType>) => {
        if(!Array.isArray(pack)) {
            dispatch(updatePackT({_id: pack._id, name: 'GOOD CARDS'}));
        }
    };


    return (
        <MaterialTable
            title="CardPacs"
            columns={[
                {
                    title: 'Name', field: 'name',
                    headerStyle: {
                        width: '10%'
                    },
                    cellStyle: {
                        width: '10%'
                    },
                },
                {
                    title: 'CardsCount', field: 'cardsCount', type: 'numeric',
                    headerStyle: {
                        textAlign: 'center',
                        width: '30%'
                    },
                    cellStyle: {
                        textAlign: 'center',
                        width: '20%'
                    },
                },
                {
                    title: 'Updated', field: 'updated',
                    headerStyle: {
                        textAlign: 'center',
                        width: '30%'
                    },
                    cellStyle: {
                        textAlign: 'center',
                        width: '30%'
                    },
                },
                {
                    title: 'Url', field: 'url', type: 'numeric',
                    headerStyle: {
                        textAlign: 'center',
                        width: '30%'
                    },
                    cellStyle: {
                        textAlign: 'center',
                        width: '30%'
                    },
                },
            ]}
            data={packs}
            actions={[
                {
                    icon: 'add',
                    tooltip: 'Add Pack',
                    isFreeAction: true,
                    onClick: (event) => addPack()
                },
                {
                    icon: 'delete',
                    tooltip: 'Delete pack',
                    onClick: (event, data: PackType | Array<PackType>) => {
                        deletePack(data)
                    }
                },
                {
                    icon: 'update',
                    tooltip: 'Update pack',
                    onClick: (event, data: PackType | Array<PackType>) => {
                        updatePacks(data)
                    }
                },
                {
                    icon: 'forum',
                    tooltip: 'Cards',
                    onClick: (event, data: PackType | Array<PackType>) => {
                        goToCards(data)
                    }
                },
            ]}
            options={{
                headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF',
                },

                actionsColumnIndex: -1
            }}
            style={{
                width: '95%',
                margin: '20px auto'
            }}
        />
    )
}

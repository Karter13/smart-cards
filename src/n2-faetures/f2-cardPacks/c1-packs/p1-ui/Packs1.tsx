import React, {useEffect} from 'react';
import MaterialTable from 'material-table';
import {useDispatch, useSelector} from 'react-redux';
import {PackType, requestPacksT} from '../p2-bll/packs-reducer';
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';


export const SimpleAction = () => {

    const packs = useSelector<AppRootStateType, Array<PackType>>(state => state.packs.cardPacks)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPacksT())
    }, [dispatch]);

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
            data={
                // packs
                [
                    {name: 'Maikl', cardsCount: 20, updated: '10-26T10:19', url: 'https://github.io/smart-cards'},
                    {name: 'Anna', cardsCount: 30, updated: '10-26T10:19', url: 'https://github.io/smart-cards'},
                    {name: 'Alex', cardsCount: 5, updated: '10-26T10:19', url: 'https://github.io/smart-cards'},
                    {name: 'Masha', cardsCount: 10, updated: '10-26T10:19', url: 'https://github.io/smart-cards'},
                ]
            }
            actions={[
                {
                    icon: 'add',
                    tooltip: 'Add Pack',
                    isFreeAction: true,
                    onClick: (event) => alert('You want to add a new pack')
                },
                {
                    icon: 'delete',
                    tooltip: 'Delete pack',
                    onClick: (event) => alert('You want to delete pack')
                },
                {
                    icon: 'update',
                    tooltip: 'Update pack',
                    onClick: (event) => alert('You want to update pack')
                },
                {
                    icon: 'forum',
                    tooltip: 'Cards',
                    onClick: (event, rowData) => alert('Show cards')
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

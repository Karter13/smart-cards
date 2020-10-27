import React from 'react';
import MaterialTable from 'material-table';

export const SimpleAction = () => {
    return (
        <MaterialTable
            title="CardPacs"
            columns={[
                {title: 'Name', field: 'name',
                    headerStyle: {
                        width: '10%'
                    },
                    cellStyle: {
                        width: '10%'
                    },},
                {title: 'CardsCount', field: 'cardsCount',
                    headerStyle: {
                        textAlign: 'center',
                        width: '30%'
                    },
                    cellStyle: {
                        textAlign: 'center',
                        width: '20%'
                    },},
                {title: 'Updated', field: 'updated', type: 'numeric',
                    headerStyle: {
                        textAlign: 'center',
                        width: '30%'
                    },
                    cellStyle: {
                        textAlign: 'center',
                        width: '30%'
                    },},
                {title: 'Url', field: 'url', type: 'numeric',
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
            data={[
                {name: 'Maikl', cardsCount: 20, updated: '10-26T10:19', url: 'https://github.io/smart-cards'},
                {name: 'Anna', cardsCount: 30, updated: '10-26T10:19', url: 'https://github.io/smart-cards'},
                {name: 'Alex', cardsCount: 5, updated: '10-26T10:19', url: 'https://github.io/smart-cards'},
                {name: 'Masha', cardsCount: 10, updated: '10-26T10:19', url: 'https://github.io/smart-cards'},
            ]}
            actions={[
                {
                    icon: 'delete',
                    tooltip: 'Delete packs',
                    onClick: (event) => alert('You want to delete ')
                },
                {
                    icon: 'update',
                    tooltip: 'Update packs',
                    onClick: (event) => alert('You want to delete ')
                },
                {
                    icon: 'forum',
                    tooltip: 'Cards',
                    onClick: (event, rowData) => alert('You saved ')
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

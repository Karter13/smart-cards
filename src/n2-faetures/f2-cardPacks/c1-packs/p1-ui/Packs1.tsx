import React from 'react';
import MaterialTable from 'material-table';

export const SimpleAction = () => {
    return (
        <MaterialTable
            title="CardPacs"
            columns={[
                {title: 'Name', field: 'name'},
                {title: 'CardsCount', field: 'cardsCount'},
                {title: 'Updated', field: 'updated', type: 'numeric'},
                {title: 'Url', field: 'url', type: 'numeric'},
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
                    onClick: (event) => alert('You want to delete ' )
                },
                {
                    icon: 'update',
                    tooltip: 'Update packs',
                    onClick: (event) => alert('You want to delete ' )
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
                    width: '90%'
                },
                actionsColumnIndex: -1
            }}
        />
    )
}

import React from 'react';
import MaterialTable from 'material-table';
import {PackType} from '../p2-bll/packs-reducer';

type PacksTablePropsType = {
    packs: Array<PackType>
    addPack: () => void
    deletePack: (pack: PackType | Array<PackType>) => void
    updatePacks: (pack: PackType | Array<PackType>) => void
    goToCards: (pack: PackType | Array<PackType>) => void
    showLearnCard: (pack: PackType | Array<PackType>) => void
}

export const PacksTable: React.FC<PacksTablePropsType> = React.memo(({packs, addPack, deletePack, goToCards, updatePacks, showLearnCard}) => {

    return (
        <MaterialTable
            title="CardPacks"
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
                    icon: 'storage',
                    tooltip: 'Learn Card',
                    onClick: (event, data: PackType | Array<PackType>) => {
                        showLearnCard(data)
                    }
                },
                {
                    icon: 'add',
                    tooltip: 'Add Pack',
                    isFreeAction: true,
                    onClick: (event) => addPack()
                },
                {
                    icon: 'create',
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
                {
                    icon: 'delete',
                    tooltip: 'Delete pack',
                    onClick: (event, data: PackType | Array<PackType>) => {
                        deletePack(data)
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
});

import React from 'react';
import MaterialTable from 'material-table';
import {CurrentPackValuesType, PackType} from '../p2-bll/packs-reducer';
import {CustomModal} from "../../../../n1-main/m1-ui/common/Modal/CustomModal";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";

type PacksTablePropsType = {
    packs: Array<PackType>
    addPack: (nameObj:{name: string}) => void
    deletePack: (pack: PackType | Array<PackType>) => void
    updatePacks: (updateObj: {_id: string, name: string}) => void
    goToCards: (pack: PackType | Array<PackType>) => void
    showLearnCard: (pack: PackType | Array<PackType>) => void
    onAddPackHandler: () => void
    onUpdatePackHandler: (pack: PackType | Array<PackType>) => void
}

export const PacksTable: React.FC<PacksTablePropsType> = ({packs, addPack, deletePack, goToCards, updatePacks,
                                                          onAddPackHandler, onUpdatePackHandler, showLearnCard}) => {

    const currentModal = useSelector<AppRootStateType>(state => state.packs.currentModal);
    const currentPackValues = useSelector<AppRootStateType, CurrentPackValuesType>(state => state.packs.currentPackValues);

    let displayModal;
    switch (currentModal) {
        case 'add':
            displayModal = <CustomModal
                heading={'Add new pack'}
                fields={[{title: 'Name'}]}
                showModal={true}
                isEditFields={true}
                callback={(values) => addPack({name: values.Name})}
            />;
            break;
        case 'delete':
            displayModal = <CustomModal
                heading={'Delete card'}
                fields={[{title: 'Are you sure?'}]}
                showModal={true}
                isEditFields={false}
            />;
            break;
        case 'error':
            displayModal = <CustomModal
                heading={'Error!'}
                fields={[{title: 'Error!'}]}
                showModal={true}
                isEditFields={false}
            />;
            break;
        case 'update':
            displayModal = <CustomModal
                heading={'Update card'}
                fields={[{title: 'Name', value: currentPackValues.name}]}
                packId={currentPackValues.id}
                showModal={true}
                isEditFields={true}
                callback={(_id, values) => updatePacks({_id, name: values.Name})}
            />;
            break;
        default:
            displayModal = '';
    }
    return (
        <>
            {displayModal}
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
                    onClick: (event) => onAddPackHandler(),
                },
                {
                    icon: 'create',
                    tooltip: 'Update pack',
                    onClick: (event, data: PackType | Array<PackType>) => {
                        onUpdatePackHandler(data)
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
        </>
    )
};

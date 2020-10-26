
export interface Column {
    id: 'name' | 'count' | 'updated' | 'url' | 'add';
    label: string;
    minWidth?: number;
    align?: 'right' | 'center';
    format?: (value: number) => string;
}

export const columns: Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'count', label: 'count', minWidth: 100 },
    {
        id: 'updated',
        label: 'updated',
        minWidth: 170,
        align: 'center',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'url',
        label: 'url',
        minWidth: 170,
        align: 'center',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'add',
        label: 'add',
        minWidth: 170,
        align: 'center',
        // format: (value: number) => value.toFixed(2),
    },
]

interface Data {
    id: string;
    name: string;
    count: number;
    updated: string;
    url: string;
    add: Array<string>;
}



export const createData = (id: string, name: string, count: number, updated: string, url: string, add: Array<string>): Data => {
    return { id, name, count, updated, url, add };
}

export const rows = [
    createData('1', 'Maikl', 10, '10-25T15:54', 'http://maikl/', ['']),
    createData('2', 'Anna', 20, '10-25T15:54', 'http://Anna/', ['']),
    createData('3', 'Alex', 30, '10-25T15:54', 'http://Alex/', ['']),
    createData('4', 'Masha', 40, '10-25T15:54', 'http://Masha/', ['']),
    createData('5', 'Petr', 50, '10-25T15:54', 'http://Petr/', ['']),
    createData('6', 'Sasha', 60, '10-25T15:54', 'http://Sasha/', ['']),

];


export const packsReduser = () => {

}

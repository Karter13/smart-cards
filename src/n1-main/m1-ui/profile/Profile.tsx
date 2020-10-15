import React, {useCallback, useState} from 'react';
import {Button} from '../common/Button/Button';
import {Input} from '../common/Input/Input';

export const Profile = React.memo(() => {

    const [value, setValue] = useState('demo input');

    const onChange = useCallback((value: string) => {
        setValue(value)
    }, [value]);

    const onBlur = useCallback(() => {
        setValue('demo input')
    }, [value]);

    return (
        <div>
            <h1>Profile</h1>
            <Input value={value} onChange={onChange} onBlur={onBlur}/>
            <Button value={'demo'} click={() => alert('CLICK')}/>
        </div>
    )
});

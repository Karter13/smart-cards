import React from 'react';
import {Input} from '../../../../../n1-main/m1-ui/common/Input/Input';
import {Button} from '../../../../../n1-main/m1-ui/common/Button/Button';
import {Checkbox} from '../../../../../n1-main/m1-ui/common/Checkbox/Checkbox';
import style from './LoginForm.module.css'

export const LoginForm = () => {
    return (
        <div>
            <Input onChange={() => console.log('mailInput')} value={'mailInput'}/>
            <Input onChange={() => console.log('passvordInput')} value={'passvordInput'}/>
            <div className={style.checkboxBlock}>
                <Checkbox checkboxValue={true} changeValue={() => console.log('checkBoxTrue')}/>
                remember me
            </div>
            <Button click={() => console.log('clickButton')} value={'login'}/>
        </div>
    )
};

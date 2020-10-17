import React, {ChangeEvent} from 'react';
import style from './Checkbox.module.css'

export type CheckboxPropsType = {
    checkboxValue: boolean
    changeValue: (value: boolean) => void
}

export const Checkbox: React.FC<CheckboxPropsType> = React.memo((props) => {

    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeValue(e.currentTarget.checked)
    };

    return (
        <div>
            <input type="checkbox"
                   className={`${style.optionInput} ${style.radio}`}
                   checked={props.checkboxValue}
                   onChange={changeStatus}
            />
        </div>
    )
});

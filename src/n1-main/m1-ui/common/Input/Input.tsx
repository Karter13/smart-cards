import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from './Input.module.css'

export type InputProsType ={
    onChange: (value: string) => void
    value: string
    pressEnter?: (event: KeyboardEvent<HTMLInputElement>) => void
    error?: string | null
    onBlur: () => void
}

export const Input: React.FC<InputProsType> = React.memo( (props) => {

    const newText = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value)
    };


    return (
        <div>
            <input className={props.error ? `${style.input} ${style.error}` : style.input} type="text"
                   autoFocus
                   value={props.value}
                   onChange={newText}
                   onBlur={props.onBlur}
                // onKeyPress={props.pressEnter}
            />
        </div>
    )
});


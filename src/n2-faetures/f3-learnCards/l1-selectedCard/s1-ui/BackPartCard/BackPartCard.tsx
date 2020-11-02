import React from 'react'
import {Button} from '../../../../../n1-main/m1-ui/common/Button/Button';

export const BackPartCard = () => {
    return (
        <div>
            <div>
                <h3>Answer</h3>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolore dolorem ea eligendi,
                        hic
                        mollitia officia recusandae repellat reprehenderit sed.</p>
                </div>
                <div>
                    <Button value={'не знал'} click={() => {
                        console.log('click')
                    }}/>
                    <Button value={'забыл'} click={() => {
                        console.log('click')
                    }}/>
                    <Button value={'долго думал'} click={() => {
                        console.log('click')
                    }}/>
                    <Button value={'перепутал'} click={() => {
                        console.log('click')
                    }}/>
                    <Button value={'знал'} click={() => {
                        console.log('click')
                    }}/>
                </div>
                <Button value={'следующая карта'} click={() => {
                    console.log('click')
                }}/>
            </div>
        </div>

    )
};

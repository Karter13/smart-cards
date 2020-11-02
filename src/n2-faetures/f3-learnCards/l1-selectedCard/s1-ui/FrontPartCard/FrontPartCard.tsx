import React from 'react'
import { Button } from '../../../../../n1-main/m1-ui/common/Button/Button';

export const FrontPartCard = () => {
    return (
        <div>
            <h3>Question</h3>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores aut blanditiis
                    cumque
                    deserunt dolorum fugit odit rem, repellendus veniam. Ab aut commodi eius facilis, ipsam labore
                    maxime nobis perspiciatis quaerat quia quidem sapiente sed sit? Distinctio itaque pariatur
                    porro!</p>
            </div>
            <Button value={'проверить'} click={() => {console.log('click')}}/>
        </div>
    )
};

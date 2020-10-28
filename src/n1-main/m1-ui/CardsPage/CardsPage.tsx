import React from 'react'
import stales from './CardsPage.module.css'
import {CardsTable} from '../../../n2-faetures/f2-cardPacks/c2-cards/c1-ui/Cards';
import {CustomSlider} from '../common/Cards/Slider/Slider';

export const CardsPage = () => {
    return (
        <>
            <div>CardsPage</div>
            <CustomSlider
                name={'Cards slider'}
                min={1}
                max={100}
                step={1}
                disabled={false}
                defaultValue={[10, 20]}
                onChange={(value) => console.log(value)}
                valueLabelDisplay={'auto'}
            />
            <CardsTable/>
        </>
    )
};

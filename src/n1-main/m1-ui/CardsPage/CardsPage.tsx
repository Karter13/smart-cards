import React from "react"
import styles from './CardsPage.module.css'
import {CustomSlider} from "../common/Cards/Slider/Slider";

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
                onChange={(value)=>console.log(value)}
                valueLabelDisplay={"auto"}
            />
            </>
    )
};

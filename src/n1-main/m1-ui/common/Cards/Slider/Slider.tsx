import React, {useState, memo} from 'react';
import Slider from "@material-ui/core/Slider";

import styles from './Slider.module.css'

type PropsType = {
    name: string;
    defaultValue?: number | Array<number>;
    disabled?: boolean;
    min: number;
    max: number;
    orientation?: 'horizontal' | 'vertical';
    step: number;
    onChange: (value: number | number[]) => void;
    valueLabelDisplay: 'on' | 'auto' | 'off';
}

export const CustomSlider = memo((props: PropsType) => {
    const {container} = styles;
    const {defaultValue, disabled, max, min, orientation, step, onChange, name, valueLabelDisplay} = props;

    const [sliderValue, setSliderValue] = useState(defaultValue);

    const handleChange = (event: any, newValue: number | number[]) => {
        setSliderValue(newValue);
        onChange(newValue);
    };

    return (
        <div className={container}>
            <p>{name}</p>
            <Slider
                value={sliderValue}
                onChange={handleChange}
                min={min}
                max={max}
                step={step}
                disabled={disabled}
                orientation={orientation}
                valueLabelDisplay={valueLabelDisplay}
            />
        </div>
    )
})

import React from 'react';

import styles from './Preloader.module.css';
import preloader from "../../../../images/Spin-1s.svg";

export const Preloader: React.FC = () => {
    return <div>
        <img src={preloader} alt={'preloader'}/>
    </div>
}

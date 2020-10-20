import React from 'react';

import preloader from "./Spin-1s.svg";

export const Preloader: React.FC = () => {
    return <div>
        <img src={preloader} alt={'preloader'}/>
    </div>
}

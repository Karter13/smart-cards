import React from 'react';
import {Header} from '../header/Header';
import {Routes} from '../routes/Routes';

export const Main = React.memo(() => {
    return (
        <div>
            <Header/>
            <Routes/>
        </div>
    )
});

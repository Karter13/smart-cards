import React from 'react';
import './App.css';
import {Main} from './main/Main';

type AppPropsType = {}

export const App: React.FC<AppPropsType> = (props) => {

    return (
        <div className="App">
            <div>
                <Main/>
            </div>
        </div>
    );
};


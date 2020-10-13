import React from 'react';
import './App.css';
import {Main} from './main/Main';
import {BrowserRouter} from 'react-router-dom';

type AppPropsType = {}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className="App">
            <BrowserRouter>{/*hr.prov*/}
                <div>
                    <h1>REACT</h1>
                    <Main/>
                </div>
            </BrowserRouter>
        </div>
    );
};


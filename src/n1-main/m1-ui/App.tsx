import React from 'react';
import './App.css';
import {Main} from './main/Main';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../m2-bll/store';

type AppPropsType = {}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <div>
                        <h1>REACT</h1>
                        <Main/>
                    </div>
                </Provider>
            </BrowserRouter>
        </div>
    );
};


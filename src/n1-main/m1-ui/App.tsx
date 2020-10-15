import React from 'react';
import './App.css';
import {Main} from './main/Main';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../m2-bll/store';

type AppPropsType = {}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className="App">
            <HashRouter>
                <Provider store={store}>
                    <div>
                        <h1>REACT FOREVER</h1>
                        <Main/>
                    </div>
                </Provider>
            </HashRouter>
        </div>
    );
};


import React from 'react'
import MainRouter from '../admin/Route/MainRouter';
import { BrowserRouter } from 'react-router-dom';
import store from '../store/Index';
import { Provider } from 'react-redux';

const App = () => {

    return (
        <div>

            <Provider store={store}>
                <BrowserRouter>
                    <MainRouter />
                </BrowserRouter >
            </Provider>

        </div>
    )
}

export default App

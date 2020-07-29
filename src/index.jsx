import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/app';
import store from 'store';
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename='/cartoon'>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

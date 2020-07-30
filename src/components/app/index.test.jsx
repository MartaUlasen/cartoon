import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'store';
import App from './index';

describe('<App />', () => {
    it('renders App', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <BrowserRouter basename='/cartoon'>
                    <App />
                </BrowserRouter>
            </Provider>,
        );
        expect(getByTestId('app')).toBeInTheDocument();
    });
});

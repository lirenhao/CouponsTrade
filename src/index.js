/**
 * Created by ALIENWARE17 on 2016/12/7.
 */
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import onsen from 'onsenui'
import App from './App.jsx';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    container
);

if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('./App.jsx').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            container
        );
    });
}
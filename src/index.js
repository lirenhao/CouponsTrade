import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const container = document.createElement('div');
document.body.appendChild(container);

require('../node_modules/onsenui/css/onsenui.css');
require('./css/onsen-css-components.css');

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    container
);

if (module.hot) {
    module.hot.accept('./App', () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('./App').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            container
        );
    });
}
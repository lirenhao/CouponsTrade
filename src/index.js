import {AppContainer} from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import '../node_modules/onsenui/css/onsenui.css'
import './css/onsen-css-components.css'

const container = document.createElement('div')
document.body.appendChild(container)

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    container
)

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        /**
         * If you use Webpack 2 in ES modules mode,
         * you can use <App /> here rather than require() a <NextApp />.
         */
        const NextApp = require('./containers/App').default
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            container
        )
    })
}
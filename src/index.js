import {AppContainer} from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import {createStore} from "redux"
import reducer from "./reducers"
import App from './containers/App'
import DevTools from "./containers/DevTools"
import '../node_modules/onsenui/css/onsenui.css'
import './css/onsen-css-components.css'

const store = createStore(reducer, DevTools.instrument())

const container = document.createElement('div')
document.body.appendChild(container)

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
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
                <Provider store={store}>
                    <NextApp />
                </Provider>
            </AppContainer>,
            container
        )
    })
}
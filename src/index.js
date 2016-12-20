import {AppContainer} from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import {createStore, compose, applyMiddleware} from "redux"
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import reducer from "./reducers"
import App from './containers/App'
import DevTools from "./containers/DevTools"
import '../node_modules/onsenui/css/onsenui.css'
import './css/onsen-css-components.css'
import './css/couponStyle.css'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    compose(
        applyMiddleware(sagaMiddleware),
        DevTools.instrument()
    )
)
sagaMiddleware.run(sagas)

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
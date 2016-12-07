import React from 'react'
import {Navigator} from 'react-onsenui'
import Tabs from './Tabs'
import DevTools from './DevTools'

const renderPage = (route, navigator) => {
    route.props = route.props || {};
    route.props.navigator = navigator;

    return React.createElement(route.comp, route.props)
}

const App = () => {
    return (
        <div>
            <Navigator
                initialRoute={{comp: Tabs, props: {key: "tabs"}}}
                renderPage={renderPage}
            />
            <DevTools/>
        </div>
    )
}

export default App
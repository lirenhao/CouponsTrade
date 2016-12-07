import React from 'react'
import {Navigator} from 'react-onsenui'
import DevTools from './DevTools'

import Tabs from './Tabs'

const App = React.createClass({
    renderPage: function (route, navigator) {
        route.props = route.props || {};
        route.props.navigator = navigator;

        return React.createElement(route.comp, route.props)
    },
    render: function () {
        return (
            <div>
                <Navigator
                    initialRoute={{comp: Tabs, props: {key: "tabs"}}}
                    renderPage={this.renderPage}
                />
                <DevTools/>
            </div>
        )
    }
});

export default App
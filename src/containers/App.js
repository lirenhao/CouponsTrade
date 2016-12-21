import React from 'react'
import {connect} from 'react-redux'
import {Navigator} from 'react-onsenui'
import Tabs from './Tabs'
import DevTools from './DevTools'
import Loading from '../components/Loading'

const renderPage = (route, navigator) => {
    route.props = route.props || {};
    route.props.navigator = navigator;

    return React.createElement(route.comp, route.props)
}

const App = (props) => {
    return (
        <div>
            <Navigator
                initialRoute={{comp: Tabs, props: {key: "tabs"}}}
                renderPage={renderPage}
            />
            <Loading loading={props.loading}/>
            <DevTools/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    loading: state.loading
})

export default connect(mapStateToProps)(App)
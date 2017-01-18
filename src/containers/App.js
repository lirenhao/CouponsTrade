import React from "react"
import {connect} from "react-redux"
import * as Ons from "react-onsenui"
import Login from "./Login"
import Dialog from "../components/Dialog"
import Loading from "../components/Loading"
import DevTools from "./DevTools"
import {hideDialog} from "../actions"
import uuid from "uuid"

const renderPage = (route, navigator) => {
    route.props = route.props || {}
    route.props.navigator = navigator
    route.props.key = route.props.key || uuid.v4()

    return React.createElement(route.comp, route.props)
}

const App = (props) => {
    return (
        <div>
            <Ons.Navigator
                initialRoute={{comp: Login, props: {key: "login"}}}
                renderPage={renderPage}
            />
            <Dialog show={props.dialog.show} msg={props.dialog.msg} hideDialog={props.hideDialog}/>
            <Loading loading={props.loading}/>
            <DevTools/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    dialog: state.dialog,
    loading: state.loading
})

export default connect(mapStateToProps, {hideDialog})(App)
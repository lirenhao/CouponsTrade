import React from "react";
import {connect} from "react-redux";
import {Navigator} from "react-onsenui";
import Tabs from "./Tabs";
import DevTools from "./DevTools";
import Dialog from "../components/Dialog";
import Loading from "../components/Loading";
import {hideDialog} from "../action";
import uuid from "uuid";

const renderPage = (route, navigator) => {
    route.props = route.props || {};
    route.props.navigator = navigator;
    route.props.key = route.props.key || uuid.v4();

    return React.createElement(route.comp, route.props)
}

const App = (props) => {
        return (
            <div>
                <Navigator
                    initialRoute={{comp: Tabs, props: {key: "tabs"}}}
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

const mapDispatchToProps = (dispatch) => ({
    hideDialog: () => {
        dispatch(hideDialog())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
/**
 * Author：liRenhao
 * Create Date：2016/12/23
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 重置密码的界面
 */
import React from "react";
import {connect} from "react-redux";
import {Page, Toolbar, BackButton} from "react-onsenui";
import {verifyPasswordRequest, updatePasswordRequest} from "../action";
import OldPassword from "../components/OldPassword";
import NewPassword from "../components/NewPassword";

const UpdatePassword = (props) => {
    return (
        <Page renderToolbar={() => (
            <Toolbar>
                <div className='left'><BackButton/></div>
                <div className='center'>新密码</div>
            </Toolbar>
        )}>
            <NewPassword onSubmit={(value) => {
                props.updatePassword({...value, token: props.token}, props.navigator)
            }}/>
        </Page>
    )
}

const VerifyPassword = (props) => {
    return (
        <Page>
            <Page renderToolbar={() => (
                <Toolbar>
                    <div className='left'><BackButton/></div>
                    <div className='center'>原密码</div>
                </Toolbar>
            )}>
                <OldPassword onSubmit={(value) => {
                    props.verifyPassword({...value, token: props.token}, props.navigator, {
                        key: "updatePassword",
                        token: props.token,
                        updatePassword: props.updatePassword
                    })
                }}/>
            </Page>
        </Page>
    )
}

const mapStateToProps = (state) => ({
    token: state.token
})

const mapDispatchToProps = (dispatch) => ({
    verifyPassword: (param, navigator, props) => {
        dispatch(verifyPasswordRequest({param, navigator, comp: UpdatePassword, props}))
    },
    updatePassword: (param, navigator) => {
        dispatch(updatePasswordRequest({param, navigator}))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(VerifyPassword)
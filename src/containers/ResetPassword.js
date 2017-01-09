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
import {verifyPasswordRequest, updatePasswordRequest, showDialog} from "../actions";
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
            <NewPassword onSubmit={(value) =>
                props.updatePasswordRequest({
                    apiType: 'updatePassword',
                    param: {...value, token: props.token},
                    router: () => props.navigator.popPage(),
                    handle: {success: [() => showDialog("密码重置成功")]}
                })
            }/>
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
                <OldPassword onSubmit={(value) =>
                    props.verifyPasswordRequest({
                        apiType: 'verifyPassword', param: {...value, token: props.token},
                        router: () => props.navigator.replacePage({
                            comp: UpdatePassword,
                            props: {
                                key: 'updatePassword',
                                token: props.token,
                                updatePasswordRequest: props.updatePasswordRequest
                            }
                        })
                    })
                }/>
            </Page>
        </Page>
    )
}

const mapStateToProps = (state) => ({
    token: state.token
})

export default connect(mapStateToProps, {verifyPasswordRequest, updatePasswordRequest})(VerifyPassword)
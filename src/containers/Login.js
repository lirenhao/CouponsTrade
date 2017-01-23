/**
 * Author：liRenhao
 * Create Date：2016/12/9
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 用户登录界面
 */
import React from 'react'
import {connect} from 'react-redux'
import {loginRequest, signUpRequest, showDialog} from '../actions'
import {Page, Toolbar, Button, BackButton} from 'react-onsenui'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import Tabs from './Tabs'

const Register = (props) => {
    return (
        <Page renderToolbar={() => (
            <Toolbar>
                <div className='left'><BackButton/></div>
                <div className='center'>注册</div>
            </Toolbar>
        )}>
            <SignUp onSubmit={(param) => {
                props.signUp({
                    apiType: 'signUp', param,
                    router: () => props.navigator.popPage(),
                    handle: {success: [() => showDialog('注册成功')]}
                })
            }}/>
        </Page>
    )
}

class Login extends React.Component {
    loginToolbar() {
        return (
            <Toolbar>
                <div className='center'>登录</div>
                <div className='right'>
                    <Button modifier='quiet' onClick={() =>
                        this.props.navigator.pushPage({
                            comp: Register,
                            props: {key: 'register', signUp: this.props.signUpRequest}
                        })}>注册</Button>
                </div>
            </Toolbar>
        )
    }

    render() {
        return (
            <Page renderToolbar={this.loginToolbar.bind(this)}>
                <SignIn onSubmit={(param) => this.props.loginRequest({
                    apiType: 'login',
                    param,
                    router: () => this.props.navigator.resetPage({
                        comp: Tabs,
                        props: {key: 'tabs', index: this.props.index || 0}
                    })
                })}/>
            </Page>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.token
})

export default connect(mapStateToProps, {loginRequest, signUpRequest})(Login)
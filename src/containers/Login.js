/**
 * Author：liRenhao
 * Create Date：2016/12/9
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 用户登录界面
 */
import React from 'react'
import {
    Page,
    Toolbar,
    Button,
    BackButton
} from 'react-onsenui'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'

const Enroll = () => {
    return (
        <Page renderToolbar={() => (
            <Toolbar>
                <div className='left'><BackButton/></div>
                <div className='center'>注册</div>
            </Toolbar>
        )}>
            <SignUp onSubmit={(value) => console.log(value)}/>
        </Page>
    )
}

class Login extends React.Component {
    loginToolbar() {
        return (
            <Toolbar>
                <div className='left'><BackButton/></div>
                <div className='center'>登录</div>
                <div className='right'>
                    <Button modifier='quiet' onClick={() =>
                        this.props.navigator.pushPage({
                            comp: Enroll,
                            props: {key: "enroll"}
                        })}>注册</Button>
                </div>
            </Toolbar>
        )
    }

    render() {
        return (
            <Page renderToolbar={this.loginToolbar.bind(this)}>
                <SignIn
                    onSubmit={(value) =>
                        this.props.navigator.popPage()}/>
            </Page>
        )
    }
}

export default Login
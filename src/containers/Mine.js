/**
 * Author：liRenhao
 * Create Date：2016/12/9
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import {
    Page,
    Toolbar,
    Button
} from 'react-onsenui'
import Login from './Login'
import User from './User'
import ResetPassword from './ResetPassword'

class Mine extends React.Component {
    render() {
        return (
            <Page renderToolbar={() => (
                <Toolbar>
                    <div className='center'>个人中心</div>
                </Toolbar>
            )}>
                <div style={{textAlign: 'center'}}>
                    <Button modifier='large quiet'
                            onClick={() => this.props.navigator.pushPage({
                                comp: Login,
                                props: {key: "Login"}
                            })}>登录</Button>
                </div>
                <div style={{textAlign: 'center'}}>
                    <Button modifier='large quiet'
                            onClick={() => this.props.navigator.pushPage({
                                comp: User,
                                props: {key: "User"}
                            })}>信息</Button>
                </div>
                <div style={{textAlign: 'center'}}>
                    <Button modifier='large quiet'
                            onClick={() => this.props.navigator.pushPage({
                                comp: ResetPassword,
                                props: {key: "ResetPassword"}
                            })}>重置密码</Button>
                </div>
            </Page>
        )
    }
}

export default Mine
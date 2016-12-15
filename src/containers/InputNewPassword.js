/**
 * Author：likon
 * Create Date：2016/12/15
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 新密码容器
 */
import React from 'react'
import {Page, Toolbar, BackButton} from 'react-onsenui'
import NewPassword from '../components/NewPassword'
import ons from 'onsenui'

class InputNewPassword extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this::this.handleSubmit;
    }

    handleSubmit() {
        ons.notification.alert("修改密码成功", {title: "通知"}).then(v => {
            this.props.navigator.popPage()
        })
    }

    resetToolbar() {
        return (
            <Toolbar>
                <div className="left">
                    <BackButton/>
                </div>
                <div className='center'>新密码</div>
            </Toolbar>
        )
    }

    render() {
        return (
            <Page renderToolbar={this.resetToolbar.bind(this)}>
                <NewPassword onSubmit={this.handleSubmit}/>
            </Page>
        )
    }

}

export default InputNewPassword

/**
 * Author：liRenhao
 * Create Date：2016/12/8
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 登录的组件
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import * as Ons from 'react-onsenui'
import InputField from './common/InputField'

const SignIn = (props) => {
    const {handleSubmit, onSubmit, invalid, submitting} = props
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <br/>
            <Ons.List modifier="inset signIn">
                <Ons.ListItem>
                    <div className="center">
                        <Field type="number" name="username" component={InputField} placeholder="输入手机号"/>
                    </div>
                </Ons.ListItem>
                <Ons.ListItem>
                    <div className="center">
                        <Field type="password" name="password" component={InputField} placeholder="输入密码"/>
                    </div>
                </Ons.ListItem>
                <Ons.ListItem>
                    <div className="center"><a href="#">切换账户</a></div>
                    <div className="right"><a href="#">忘记密码？</a></div>
                </Ons.ListItem>
            </Ons.List>
            <Ons.Button modifier="large marginTLR" disabled={invalid || submitting}
                        onClick={props.submit}>登录</Ons.Button>
        </form>
    )
}

SignIn.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
}

const validate = (value) => {
    const errors = {}
    if (!value.username) {
        errors.username = 'Required'
    }
    if (!value.password) {
        errors.password = 'Required'
    }
    return errors
}

export default reduxForm({
    form: "signIn", validate
})(SignIn)
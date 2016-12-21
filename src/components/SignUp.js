/**
 * Author：liRenhao
 * Create Date：2016/12/8
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 注册的组件
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input, Button, List, ListItem} from 'react-onsenui'

const SignUpField = ({input, type, placeholder}) => {
    return (
        <Input {...input}
               type={type}
               placeholder={placeholder}
               modifier='underbar'
               float/>
    )
}

const SignUp = (props) => {
    const {handleSubmit, onSubmit, invalid, submitting} = props
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <List modifier="inset marginT marginB">
                <ListItem>
                    <div className="center">
                        <Field type="text"
                               name="nickname"
                               component={SignUpField}
                               placeholder="输入昵称"/>
                    </div>
                </ListItem>
                <ListItem>
                    <div className="center">
                        <Field type="text"
                               name="phoneNumber"
                               component={SignUpField}
                               placeholder="输入手机号"/>
                    </div>
                </ListItem>
                <ListItem>
                </ListItem>
            </List>
            <Button modifier='quiet marginTLR'>获取验证码</Button>
            <List modifier="inset marginB">
                <ListItem>
                    <div className="center">
                        <Field type="text"
                               name="validateCode"
                               component={SignUpField}
                               placeholder="输入验证码"/>
                    </div>
                </ListItem>
                <ListItem>
                    <div className="center">
                        <Field type="password"
                               name="password"
                               component={SignUpField}
                               placeholder="输入密码"/>
                    </div>
                </ListItem>
                <ListItem>
                    <div className="center">
                        <Field type="text"
                               name="inviteCode"
                               component={SignUpField}
                               placeholder="输入邀请码"/>
                    </div>
                </ListItem>
                <ListItem>
                </ListItem>
            </List>
            <Button modifier="large marginTLR"
                    disabled={invalid || submitting}
                    onClick={props.submit}>
                注册
            </Button>
        </form>
    )
}

SignUp.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
}

const validate = (value) => {
    const errors = {}
    if (!value.nickname) {
        errors.nickname = 'Required'
    }
    if (!value.phoneNumber) {
        errors.phoneNumber = 'Required'
    }
    if (!value.validateCode) {
        errors.validateCode = 'Required'
    }
    if (!value.password) {
        errors.password = 'Required'
    }
    if (!value.inviteCode) {
        errors.inviteCode = 'Required'
    }
    return errors
}

export default reduxForm({
    form: "signUp", validate
})(SignUp)
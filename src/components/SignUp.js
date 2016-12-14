/**
 * Author：liRenhao
 * Create Date：2016/12/8
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 注册的组件
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input, Button} from 'react-onsenui'

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
            <section style={{textAlign: 'center'}}>
                <p>
                    <Field type="text"
                           name="nickname"
                           component={SignUpField}
                           placeholder="输入昵称"/>
                </p>
                <p>
                    <Field type="number"
                           name="phoneNumber"
                           component={SignUpField}
                           placeholder="输入手机号"/>
                </p>
                <p>
                    <Button style={{fontSize: '15px'}} modifier='quiet'>获取验证码</Button>
                    <br/>
                    <Field type="number"
                           name="validateCode"
                           component={SignUpField}
                           placeholder="输入验证码"/>
                </p>
                <p>
                    <Field type="password"
                           name="password"
                           component={SignUpField}
                           placeholder="输入密码"/>
                </p>
                <p>
                    <Field type="text"
                           name="inviteCode"
                           component={SignUpField}
                           placeholder="输入邀请码"/>
                </p>
                <p style={{marginLeft: '20%', marginRight: '20%'}}>
                    <br/>
                    <Button modifier="large"
                            disabled={invalid || submitting}
                            onClick={props.submit}>
                        注册
                    </Button>
                </p>
            </section>
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
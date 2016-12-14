/**
 * Author：liRenhao
 * Create Date：2016/12/8
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 登录的组件
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input, Button} from 'react-onsenui'

const SignInField = ({input, type, placeholder}) => {
    return (
        <Input {...input}
               type={type}
               placeholder={placeholder}
               modifier='underbar'
               float/>
    )
}

const SignIn = (props) => {
    const {handleSubmit, onSubmit, invalid, submitting} = props
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section style={{marginTop: '50px', textAlign: 'center'}}>
                <p>
                    <Field type="number"
                           name="username"
                           component={SignInField}
                           placeholder="输入手机号"/>
                </p>
                <p>
                    <Field type="password"
                           name="password"
                           component={SignInField}
                           placeholder="输入密码"/>
                </p>
                <p style={{textAlign: 'right', marginRight: '50px'}}>
                    <Button style={{fontSize: '12px'}} modifier='quiet'>忘记密码？</Button>
                </p>
                <p style={{marginLeft: '20%', marginRight: '20%'}}>
                    <Button modifier="large"
                            disabled={invalid || submitting}
                            onClick={props.submit}>
                        登录
                    </Button>
                </p>
            </section>
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
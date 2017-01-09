/**
 * Author：liRenhao
 * Create Date：2016/12/8
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 登录的组件
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input, Button, List, ListItem} from 'react-onsenui'

const defaultValue = {
    username: "1",
    password: "1"
};

const SignInField = ({input, type, placeholder}) => {
    return (
        <Input {...input}
               type={type}
               placeholder={placeholder}
               required
               float/>
    )
};

const SignIn = (props) => {
    const {handleSubmit, onSubmit, invalid, submitting} = props
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <br/>
            <List modifier="inset signIn">
                <ListItem>
                    <div className="center">
                        <Field type="number" name="username" component={SignInField} placeholder="输入手机号"/>
                    </div>
                </ListItem>
                <ListItem>
                    <div className="center">
                        <Field type="password" name="password" component={SignInField} placeholder="输入密码"/>
                    </div>
                </ListItem>
                <ListItem>
                    <div className="center"><a href="#">切换账户</a></div>
                    <div className="right"><a href="#">忘记密码？</a></div>
                </ListItem>
            </List>
            <Button modifier="large marginTLR" disabled={invalid || submitting} onClick={props.submit}>登录</Button>
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
    form: "signIn", validate,
    initialValues: defaultValue
})(SignIn)
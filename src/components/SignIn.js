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
const SignInField = ({input, type, placeholder}) => {
    return (
        <Input {...input}
               className='text-input'
               type={type}
               placeholder={placeholder}
               float/>
    )
};

const SignIn = (props) => {
    const {handleSubmit, onSubmit, invalid, submitting} = props
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <List modifier="inset">
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
            </List>
            <Button modifier='quiet'>忘记密码？</Button>
            <Button modifier="large" disabled={invalid || submitting} onClick={props.submit}>登录</Button>
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
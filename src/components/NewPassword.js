/**
 * Author：likon
 * Create Date：2016/12/12
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 新密码组件
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input, Button} from 'react-onsenui'

const newPasswordField = ({input, type, placeholder}) => {
    return (
        <Input {...input}
               type={type}
               placeholder={placeholder}
               modifier='underbar'
               float/>
    )
};

const NewPassword = (props) => {
    const {handleSubmit, onSubmit, invalid, submitting} = props;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section>
                <br/>
                <Field type="text"
                       name="newPassword"
                       component={newPasswordField}
                       placeholder="请输入新密码"
                       required/>
                <Field type="text"
                       name="renewPassword"
                       component={newPasswordField}
                       placeholder="请再次输入新密码"
                       required/>
            </section>
            <br/>
            <br/>
            <Button modifier="large marginTLR" disabled={invalid || submitting} onClick={props.submit}>确定</Button>
        </form>
    )
};

NewPassword.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
};

const validate = (value) => {
    const errors = {};
    if (!value.newPassword) {
        errors.newPassword = 'Required'
    }
    if (!value.renewPassword) {
        errors.renewPassword = 'Required'
    }
    if (value.newPassword != value.renewPassword) {
        errors.renewPassword = '两次输入的密码不一致'
    }
    return errors
}

export default reduxForm({
    form: "newPassword", validate
})(NewPassword)
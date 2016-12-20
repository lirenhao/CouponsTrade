/**
 * Author：likon
 * Create Date：2016/12/9
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 原密码组件
 */ 

import React from 'react'
import {Field,reduxForm} from 'redux-form'
import {Input,Button} from 'react-onsenui'

const oldPasswordField = ({input, type, placeholder}) => {
    return (
        <Input {...input}
               type={type}
               placeholder={placeholder}
               modifier='underbar'
               float/>
    )
};

const OldPassword = (props) => {
    const {handleSubmit, onSubmit, invalid, submitting} = props;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <br/>
            <section>
                    <Field type="text"
                           name="oldPassword"
                           component={oldPasswordField}
                           placeholder="请输入原密码"
                           required/>
                <br/>
            </section>
            <br/>
            <Button modifier="large marginTLR" disabled={invalid || submitting} onClick={props.submit}>登录</Button>
        </form>
    )
};

OldPassword.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
};

const validate = (value) => {
    const errors = {};
    if (!value.oldPassword) {
        errors.oldPassword = 'Required'
    }
    return errors
};

export default reduxForm({
    form: "OldPassword", validate
})(OldPassword)
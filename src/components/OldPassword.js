/**
 * Author：likon
 * Create Date：2016/12/9
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 原密码组件
 */ 

import React from 'react'
import {Field,reduxForm} from 'redux-form'
import {Input} from 'react-onsenui'

const OldpasswordField = ({input, type, placeholder}) => {
    return (
        <Input {...input}
               type={type}
               placeholder={placeholder}
               modifier='underbar'
               float/>
    )
}

const OldPassword = (props) => {
    const {handleSubmit, onSubmit, invalid, submitting} = props
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section style={{textAlign: 'center'}}>
                <p>
                    <Field type="text"
                           name="oldPassword"
                           component={OldpasswordField}
                           placeholder="请输入原密码"/>
                </p>
                <p>
                    <button className="button" type="submit" disabled={invalid || submitting}>确定</button>
                </p>
            </section>
        </form>
    )
}

OldPassword.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
}

const validate = (value) => {
    const errors = {}
    if (!value.oldPassword) {
        errors.oldPassword = 'Required'
    }
    return errors
}

export default reduxForm({
    form: "OldPassword", validate
})(OldPassword)
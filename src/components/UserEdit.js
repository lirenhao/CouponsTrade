/**
 * Author：liRenhao
 * Create Date：2016/12/8
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 用户信息编辑组件
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input, Button} from 'react-onsenui'

const UserEditField = ({input, type, placeholder}) => {
    return (
        <Input {...input}
               type={type}
               placeholder={placeholder}
               modifier='underbar'
               float/>
    )
}

const UserEdit = (props) => {
    const {handleSubmit, onSubmit, invalid, submitting} = props
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section style={{textAlign: 'center'}}>
                <p>
                    <Field type="text"
                           name="nickname"
                           component={UserEditField}
                           placeholder="Nickname"/>
                </p>
                <p>
                    <Field type="number"
                           name="phoneNumber"
                           component={UserEditField}
                           placeholder="Phone number"/>
                </p>
                <p>
                    <Field type="text"
                           name="inviteCode"
                           component={UserEditField}
                           placeholder="Invite code"/>
                </p>
                <p>
                    <button className="button" type="submit" disabled={invalid || submitting}>Save</button>
                </p>
            </section>
        </form>
    )
}

UserEdit.propTypes = {
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
    if (!value.inviteCode) {
        errors.inviteCode = 'Required'
    }
    return errors
}

export default reduxForm({
    form: "userEdit", validate
})(UserEdit)
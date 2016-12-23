/**
 * Author：liRenhao
 * Create Date：2016/12/8
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 用户信息编辑组件
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input, Button, List, ListItem} from 'react-onsenui'

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
            <List modifier="inset marginT">
                <ListItem>
                    <div className="center">
                        <Field type="text"
                               name="nickname"
                               component={UserEditField}
                               placeholder="昵称"/>
                    </div>
                </ListItem>
                <ListItem>
                    <div className="center">
                        <Field type="number"
                               name="phoneNo"
                               component={UserEditField}
                               placeholder="手机号"/>
                    </div>
                </ListItem>
                <ListItem>
                    <div className="center">
                        <Field type="text"
                               name="inviteCode"
                               component={UserEditField}
                               placeholder="邀请码"/>
                    </div>
                </ListItem>
                <ListItem>
                </ListItem>
            </List>
            <Button modifier="large marginTLR"
                    disabled={invalid || submitting}
                    onClick={props.submit}>
                确认修改
            </Button>
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
    if (!value.phoneNo) {
        errors.phoneNo = 'Required'
    }
    if (!value.inviteCode) {
        errors.inviteCode = 'Required'
    }
    return errors
}

export default reduxForm({
    form: "userEdit", validate
})(UserEdit)
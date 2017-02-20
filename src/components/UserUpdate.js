/**
 * Author：liRenhao
 * Create Date：2016/12/8
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 用户信息编辑组件
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import * as Ons from 'react-onsenui'
import InputField from './common/InputField'

const UserUpdate = (props) => {
  const {handleSubmit, onSubmit, invalid, submitting} = props
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Ons.List modifier="inset marginT">
        <Ons.ListItem>
          <div className="center">
            <Field type="text"
                   name="nickname"
                   component={InputField}
                   placeholder="昵称"/>
          </div>
        </Ons.ListItem>
        <Ons.ListItem>
          <div className="center">
            <Field type="number"
                   name="phoneNo"
                   component={InputField}
                   placeholder="手机号"/>
          </div>
        </Ons.ListItem>
        <Ons.ListItem>
          <div className="center">
            <Field type="text"
                   name="inviteCode"
                   component={InputField}
                   placeholder="邀请码"/>
          </div>
        </Ons.ListItem>
        <Ons.ListItem>
        </Ons.ListItem>
      </Ons.List>
      <Ons.Button modifier="large marginTLR marginB"
                  disabled={invalid || submitting}
                  onClick={props.submit}>
        确认修改
      </Ons.Button>
    </form>
  )
}

UserUpdate.propTypes = {
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
  form: "userUpdate", validate
})(UserUpdate)
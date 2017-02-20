/**
 * Author：liRenhao
 * Create Date：2016/12/8
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 注册的组件
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import * as Ons from 'react-onsenui'
import InputField from './common/InputField'

const SignUp = (props) => {
  const {handleSubmit, onSubmit, invalid, submitting} = props
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Ons.List modifier="inset marginT ">
        <Ons.ListItem>
          <div className="center">
            <Field type="text"
                   name="nickname"
                   component={InputField}
                   placeholder="输入昵称"/>
          </div>
        </Ons.ListItem>
        <Ons.ListItem>
          <div className="center">
            <Field type="text"
                   name="phoneNumber"
                   component={InputField}
                   placeholder="输入手机号"/>
          </div>
        </Ons.ListItem>
        <Ons.ListItem>
        </Ons.ListItem>
      </Ons.List>
      <Ons.Button modifier='large quiet'>获取验证码</Ons.Button>
      <Ons.List modifier="inset marginB">
        <Ons.ListItem>
          <div className="center">
            <Field type="text"
                   name="validateCode"
                   component={InputField}
                   placeholder="输入验证码"/>
          </div>
        </Ons.ListItem>
        <Ons.ListItem>
          <div className="center">
            <Field type="password"
                   name="password"
                   component={InputField}
                   placeholder="输入密码"/>
          </div>
        </Ons.ListItem>
        <Ons.ListItem>
          <div className="center">
            <Field type="text"
                   name="inviteCode"
                   component={InputField}
                   placeholder="输入邀请码"/>
          </div>
        </Ons.ListItem>
        <Ons.ListItem>
        </Ons.ListItem>
      </Ons.List>
      <Ons.Button modifier="large marginTLR marginB"
                  disabled={invalid || submitting}
                  onClick={props.submit}>
        注册
      </Ons.Button>
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
/**
 * Author：likon
 * Create Date：2016/12/12
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 新密码组件
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import * as Ons from 'react-onsenui'
import InputField from './common/InputField'

const PasswordUpdate = (props) => {
  const {handleSubmit, onSubmit, invalid, submitting} = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section>
        <br/>
        <Field type="text"
               name="newPassword"
               component={InputField}
               placeholder="请输入新密码"
               required/>
        <Field type="text"
               name="renewPassword"
               component={InputField}
               placeholder="请再次输入新密码"
               required/>
      </section>
      <br/>
      <br/>
      <Ons.Button modifier="large marginTLR" disabled={invalid || submitting} onClick={props.submit}>确定</Ons.Button>
    </form>
  )
};

PasswordUpdate.propTypes = {
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
  form: "passwordUpdate", validate
})(PasswordUpdate)
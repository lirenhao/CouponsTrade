/**
 * Author：liRenhao
 * Create Date：2016/12/8
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 用户信息展示组件
 */
import React from 'react'
import * as Ons from 'react-onsenui'

const UserInfo = (props) => {
  const {user} = props
  return (
    <Ons.List modifier='inset marginT mine'>
      <Ons.ListHeader><img src={`http://placekitten.com/g/40/40`} alt=""/></Ons.ListHeader>
      <Ons.ListItem>
        昵称
        <div className="right">{user.nickname}</div>
      </Ons.ListItem>
      <Ons.ListItem>
        手机号
        <div className="right">{user.phoneNo}</div>
      </Ons.ListItem>
      <Ons.ListItem>
        邀请码
        <div className="right">{user.inviteCode}</div>
      </Ons.ListItem>
    </Ons.List>
  )
}

/**
 * UserInfo所需的参数
 * @param user 用户的基本信息
 * @type {{user: *}}
 */
UserInfo.propTypes = {
  user: React.PropTypes.shape({
    nickname: React.PropTypes.string.isRequired,
    phoneNo: React.PropTypes.string.isRequired,
    inviteCode: React.PropTypes.string.isRequired
  }).isRequired
}

export default UserInfo
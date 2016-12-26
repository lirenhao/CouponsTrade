/**
 * Author：liRenhao
 * Create Date：2016/12/8
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 用户信息展示组件
 */
import React from 'react'
import {List, ListItem, ListHeader} from 'react-onsenui'

const UserShow = (props) => {
    const {user} = props
    return (
            <List modifier='inset marginT mine'>
                <ListHeader><img src={`http://placekitten.com/g/40/40`} alt=""/></ListHeader>
                <ListItem>
                    昵称
                    <div className="right">{user.nickname}</div>
                </ListItem>
                <ListItem>
                    手机号
                    <div className="right">{user.phoneNo}</div>
                </ListItem>
                <ListItem>
                    邀请码
                    <div className="right">{user.inviteCode}</div>
                </ListItem>
            </List>
    )
}

/**
 * UserShow所需的参数
 * @param user 用户的基本信息
 * @type {{user: *}}
 */
UserShow.propTypes = {
    user: React.PropTypes.shape({
        nickname: React.PropTypes.string.isRequired,
        phoneNo: React.PropTypes.string.isRequired,
        inviteCode: React.PropTypes.string.isRequired
    }).isRequired
}

export default UserShow
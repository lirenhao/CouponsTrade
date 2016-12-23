/**
 * Author：liRenhao
 * Create Date：2016/12/8
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 用户信息展示组件
 */
import React from 'react'
import {SpeedDial, SpeedDialItem, Fab, Icon, List, ListItem, ListHeader} from 'react-onsenui'

const UserShow = (props) => {
    const {share, edit, user} = props
    return (
        <div>
            <SpeedDial position='bottom right'>
                <Fab>
                    <Icon icon='md-menu'/>
                </Fab>
                <SpeedDialItem onClick={share}>
                    <Icon icon='md-share'/>
                </SpeedDialItem>
                <SpeedDialItem onClick={edit}>
                    <Icon icon='md-edit'/>
                </SpeedDialItem>
            </SpeedDial>
            <List modifier='inset marginT mine'>
                <ListHeader><img src={`http://placekitten.com/g/40/40`} alt=""/></ListHeader>
                <ListItem>
                    昵称
                    <div className="right">{user.nickname}</div>
                </ListItem>
                <ListItem>
                    手机号
                    <div className="right">{user.phoneNumber}</div>
                </ListItem>
                <ListItem>
                    邀请码
                    <div className="right">{user.inviteCode}</div>
                </ListItem>
            </List>
        </div>
    )
}

/**
 * UserShow所需的参数
 * @param share 跳转生成邀请码组件的函数
 * @param edit 跳转编辑个人信息组件的函数
 * @param user 用户的基本信息
 * @type {{share: *, edit: *, user: *}}
 */
UserShow.propTypes = {
    share: React.PropTypes.func.isRequired,
    edit: React.PropTypes.func.isRequired,
    user: React.PropTypes.shape({
        nickname: React.PropTypes.string.isRequired,
        phoneNumber: React.PropTypes.string.isRequired,
        inviteCode: React.PropTypes.string.isRequired
    }).isRequired
}

export default UserShow
/**
 * Author：liRenhao
 * Create Date：2016/12/8
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 用户信息展示组件
 */
import React from 'react'
import {Page, Toolbar, SpeedDial, SpeedDialItem, Fab, Icon, Row, Col} from 'react-onsenui'

const styles = {
    main: {
        fontFamily: 'sans-serif',
        textAlign: 'center',
    },
    icon: {
        fontSize: '60px',
        marginTop: '1em',
        opacity:'0.4'
    },
    icons: {
        border:'1px solid #666',
        borderRadius: '50%',
        padding:'12px 20px',
        boxShadow:'rgba(0, 0, 0, 0.2) 0px 2px 0px 0px'
    },
    name: {
        fontSize: '1.25em',
        margin:'1em 0'
    },
    data: {
        fontSize: '1em',
        margin: '0.5em 0'
    },
    dataKey: {
        textAlign: 'right'
    },
    dataValue: {
        textAlign: 'left',
        marginLeft:'0.5em'
    }
}

const UserShow = (props) => {
    const {share, edit, user} = props
    return (
        <div style={styles.main}>
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

            <div style={styles.icon}>
                <Icon icon='ion-person' style={styles.icons}/>
            </div>

            <div style={styles.name}>
                {user.nickname}
            </div>

            <Row style={styles.data}>
                <Col style={styles.dataKey} width="40%">
                    手机号:
                </Col>
                <Col style={styles.dataValue} width="50%">
                    {user.phoneNumber}
                </Col>
            </Row>
            <Row style={styles.data}>
                <Col style={styles.dataKey} width="40%">
                    邀请码:
                </Col>
                <Col style={styles.dataValue} width="50%">
                    {user.inviteCode}
                </Col>
            </Row>
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
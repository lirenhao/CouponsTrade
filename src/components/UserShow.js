/**
 * Author：liRenhao
 * Create Date：2016/12/8
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 用户信息展示组件
 */
import React from 'react'
import {Page, Toolbar, Fab, Icon, Row, Col} from 'react-onsenui'

const styles = {
    main: {
        fontFamily: 'sans-serif',
        textAlign: 'center',
    },
    icon: {
        fontSize: '150px',
        margin: '20px 0 0px 0'
    },
    name: {
        fontSize: '30px'
    },
    data: {
        fontSize: '20px',
        margin: '10px 0px 10px 0px'
    },
    dataKey: {
        textAlign: 'right'
    },
    dataValue: {
        textAlign: 'center'
    }
}

const UserShow = (props) => {
    const {edit, user} = props
    return (
        <Page>
            <Fab position='bottom right' modifier='mini' onChange={edit}>
                <Icon icon='md-edit'/>
            </Fab>
            <div style={styles.main}>
                <div style={styles.icon}>
                    <Icon icon='ion-person'/>
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
        </Page>
    )
}

UserShow.propTypes = {
    edit: React.PropTypes.func.isRequired,
    user: React.PropTypes.shape({
        nickname: React.PropTypes.string.isRequired,
        phoneNumber: React.PropTypes.string.isRequired,
        inviteCode: React.PropTypes.string.isRequired
    }).isRequired
}

export default UserShow
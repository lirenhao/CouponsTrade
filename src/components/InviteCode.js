/**
 * Author：liRenhao
 * Create Date：2016/12/9
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 生成邀请码组件
 */
import React from 'react'

const styles = {
    content: {
        textAlign: 'center',
        margin: '40px',
        opacity: 0.8
    }
}

const InviteCode = (props) => {
    return (
        <div style={styles.content}>
                {props.inviteCode}
        </div>
    )
}

InviteCode.propTypes = {
    inviteCode: React.PropTypes.string.isRequired
}

export default InviteCode
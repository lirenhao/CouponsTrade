/**
 * Author：liRenhao
 * Create Date：2016/12/9
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 生成邀请码组件
 */
import React from 'react'


const InviteCode = (props) => {
    return (
        <div className="inviteBg">
            {props.inviteCode}
        </div>
    )
}

InviteCode.propTypes = {
    inviteCode: React.PropTypes.string.isRequired
}

export default InviteCode
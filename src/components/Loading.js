/**
 * Author：liRenhao
 * Create Date：2016/12/21
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import {Modal, ProgressCircular, Button} from 'react-onsenui'

const Loading = (props) => {
    return (
        <Modal modifier="load" animation='fade'
            isOpen={props.loading}>
               <ProgressCircular indeterminate/>
        </Modal>
    )
}

Loading.propTypes = {
    loading: React.PropTypes.bool.isRequired
}

export default Loading
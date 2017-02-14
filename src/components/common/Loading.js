/**
 * Author：liRenhao
 * Create Date：2016/12/21
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import * as Ons from 'react-onsenui'

const Loading = (props) => {
    return (
        <Ons.Modal isOpen={props.loading}
                   modifier='load' animation='fade'>
            <Ons.ProgressCircular indeterminate/>
        </Ons.Modal>
    )
}

Loading.propTypes = {
    loading: React.PropTypes.bool.isRequired
}

export default Loading
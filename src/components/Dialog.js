/**
 * Author：liRenhao
 * Create Date：2016/12/21
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import {Dialog as OnsDialog, Button} from 'react-onsenui'

const Dialog = (props) => {
    return (
        <OnsDialog isOpen={props.show} isCancelable={false}>
            <div className="myDialog">
                <p>
                    {props.msg}
                </p>
                <Button onClick={props.hideDialog}>Close</Button>
            </div>
        </OnsDialog>
    )
}

Dialog.propTypes = {
    show: React.PropTypes.bool.isRequired,
    msg: React.PropTypes.string.isRequired,
    hideDialog: React.PropTypes.func.isRequired
}

export default Dialog
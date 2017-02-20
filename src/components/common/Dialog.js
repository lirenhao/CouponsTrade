/**
 * Author：liRenhao
 * Create Date：2016/12/21
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import * as Ons from 'react-onsenui'

const Dialog = (props) => {
  return (
    <Ons.Dialog isOpen={props.show} isCancelable={false}>
      <div className="myDialog">
        <p>
          {props.message}
        </p>
        <Ons.Button onClick={props.hideDialog}>关闭</Ons.Button>
      </div>
    </Ons.Dialog>
  )
}

Dialog.propTypes = {
  show: React.PropTypes.bool.isRequired,
  message: React.PropTypes.string.isRequired,
  hideDialog: React.PropTypes.func.isRequired
}

export default Dialog
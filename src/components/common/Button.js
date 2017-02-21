/**
 * Author：Yky
 * Create Date：2017/2/21
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'

export default props => {
  return <div className="button-bar__item">
    <button className="button-bar__button" type={props.type}
            disabled={props.disabled}
            onClick={props.handleClick}>
      <ons-icon icon="ion-ios-compose-outline"> {props.children}</ons-icon>
    </button>
  </div>
}
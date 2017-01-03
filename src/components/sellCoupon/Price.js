/**
 * Author：pengfei
 * Create Date：2016/12/14
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 价格显示组建
 */


import React from 'react'

const PriceComponent = ({price})=> {
    return (
        <div className="price">￥{price}</div>
    )
}

export default PriceComponent
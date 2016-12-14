/**
 * Author：pengfei
 * Create Date：2016/12/14
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */


import React from 'react'

const PriseComponent = ({text, newPrise})=> {
    return (
        <div>{text + "：" + newPrise.toString()}</div>
    )
};

export default PriseComponent
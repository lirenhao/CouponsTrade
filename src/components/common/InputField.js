/**
 * Author：liRenhao
 * Create Date：2017/2/14
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import * as Ons from 'react-onsenui'

const InputField = ({input, type, placeholder}) => {
    return (
        <Ons.Input {...input}
                   type={type}
                   placeholder={placeholder}
                   modifier='underbar'
                   float/>
    )
}

export default InputField
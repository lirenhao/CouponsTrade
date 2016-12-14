/**
 * Author：likon
 * Create Date：2016/12/14
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 按钮组件
 */ 
import React from 'react';

const Button =(props)=>{
     const {value}=props;
    return (
            <button className="button button--large" type="submit">{value}</button>
    )
};

Button.propTypes = {
    value: React.PropTypes.string.isRequired
};

export default Button;
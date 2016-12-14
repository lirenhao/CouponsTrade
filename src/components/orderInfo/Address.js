/**
 * Author：Yky
 * Create Date：2016/12/13
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示买方信息的组件
 */
import React, {PropTypes} from 'react'
import {Icon, Button} from 'react-onsenui'
import ons from 'onsenui'

const handleClickDialog = () => {
    ons.notification.alert("点击这里会进入编辑个人联系方式界面", {title: "说明"})
};

const Address = ({name, tel}) => {
    return (
        <div style={{"margin": "20px 0", "backgroundColor": "white"}}>
            <div style={{
                "float": "right", "padding": "0", "textAlign": "center",
                "width": "10%"
            }}
                 onClick={handleClickDialog}>
                <Icon icon="ion-ios-arrow-right"/>
            </div>
            <p style={{"paddingLeft": "14px"}}>{name + "  " + tel}</p>
        </div>
    )
};

Address.propTypes = {
    name: PropTypes.string.isRequired,
    tel: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
};

export default Address
/**
 * Author：Yky
 * Create Date：2016/12/13
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示买方信息的组件
 */
import React, {PropTypes} from 'react'
import {Icon, Button} from 'react-onsenui'
import User from '../../containers/User'

const Address = ({name, tel, navigator}) => {
    return (
        <div style={{"margin": "20px 0", "backgroundColor": "white"}}>
            <div style={{
                "float": "right", "padding": "0", "textAlign": "center",
                "width": "10%"
            }}
                 onClick={() => navigator.pushPage({
                     comp: User, props: {key: "User"}
                 })}>
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
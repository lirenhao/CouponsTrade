/**
 * Author：Yky
 * Create Date：2016/12/14
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示已生成订单详细信息的组件
 */
import React, {PropTypes} from 'react'
import {Page, Toolbar, BackButton} from 'react-onsenui'

const renderToolbar = () => {
    return (
        <Toolbar>
            <div className='left'>
                <BackButton>返回</BackButton>
            </div>
            <div className="center">订单信息</div>
        </Toolbar>
    )
};

const OrderInfo = ({username, sellName, itemName, price, orderId, orderTime}) => {
    return (
        <Page renderToolbar={renderToolbar}>
            <div>卖家:{sellName}</div>
            <div><img alt="商品图片"/>{itemName + " " + price + "元"}</div>
            <div>收货人:{username}</div>
            <div>订单编号:{orderId}</div>
            <div>交易时间:{orderTime}</div>
        </Page>
    )
};

OrderInfo.propTypes = {
    username: PropTypes.string.isRequired,
    sellName: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    orderId: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    orderTime: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    price: PropTypes.number.isRequired,
};

export default OrderInfo
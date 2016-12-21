/**
 * Author：Yky
 * Create Date：2016/12/14
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示已生成订单详细信息的组件
 */
import React, {PropTypes} from 'react'
import {Page, Toolbar, BackButton, List, ListHeader, ListItem} from 'react-onsenui'

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

const OrderInfo = ({username, sellName, itemName, price, orderId, orderTime, handleClick}) => {
    return (
        <Page renderToolbar={renderToolbar}>
            <List modifier="inset marginT">
                <ListItem onClick={handleClick}>
                    <div className="left">
                        <img className='list__item__thumbnail' src={`http://placekitten.com/g/40/40`} alt="商品图片"/>
                    </div>
                    <div className="center">{itemName }</div>
                    <div className="right"><span className="price">{price + "元"}</span></div>
                </ListItem>
            </List>
            <List modifier="inset marginT">
                <ListItem>卖家:{sellName}</ListItem>
                <ListItem>收货人:{username}</ListItem>
                <ListItem>订单编号:{orderId}</ListItem>
                <ListItem>交易时间:{orderTime}</ListItem>
            </List>
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
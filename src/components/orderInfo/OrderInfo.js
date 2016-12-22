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

const OrderInfo = (props) => {
    const {
        orderNo, orderDate, orderTime, id, couponName, isAutomaticRefund,
        couponType, couponModality, couponCode, sellingPrice, originalPrice,
        ticketPrice, endDate, describe, isOpen, handleClick, sellerNickName
    }=props;
    console.log(props);
    return (
        <Page renderToolbar={renderToolbar}>
            <List modifier="inset marginT">
                <ListItem onClick={handleClick}>
                    <div className="left">
                        <img className='list__item__thumbnail' src={`http://placekitten.com/g/40/40`} alt="商品图片"/>
                    </div>
                    <div className="center">{couponName }</div>
                    <div className="right"><span className="price">{sellingPrice + "元"}</span></div>
                </ListItem>
            </List>
            <List modifier="inset marginT">
                <ListItem>卖家昵称:{sellerNickName}</ListItem>
                <ListItem>商品ID:{id}</ListItem>
                <ListItem>是否支持未开始时自动退货:{isAutomaticRefund ? "是" : "否"}</ListItem>
                <ListItem>优惠券类别:{couponType}</ListItem>
                <ListItem>券码形式:{couponModality}</ListItem>
                <ListItem>券码:{couponCode}</ListItem>
                <ListItem>卖价:{sellingPrice}</ListItem>
                <ListItem>原价:{originalPrice}</ListItem>
                <ListItem>券面值:{ticketPrice}</ListItem>
                <ListItem>截止日期:{endDate}</ListItem>
                <ListItem>描述:{describe}</ListItem>
                <ListItem>是否已开启:{isOpen ? "是" : "否"}</ListItem>
                <ListItem>订单编号:{orderNo}</ListItem>
                <ListItem>交易时间:{orderDate + " " + orderTime}</ListItem>
            </List>
        </Page>
    )
};

OrderInfo.propTypes = {};

export default OrderInfo
/**
 * Author：Yky
 * Create Date：2016/12/14
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示已生成订单详细信息的组件
 */
import React, {PropTypes} from 'react'
import {Page, Toolbar, BackButton, List, ListHeader, ListItem, Button, BottomToolbar} from 'react-onsenui'
import {connect} from 'react-redux'
import {openCouponRequest, cancelOrderRequest, receiptOrderRequest, getOrderListRequest} from '../actions'
import PayOrder from './PayOrder'
import ons from 'onsenui'

const renderToolbar = () => {
    return (
        <Toolbar>
            <div className='left'><BackButton/></div>
            <div className="center">订单信息</div>
        </Toolbar>
    )
}

const OrderInfo = (props) => {
    const {
        orderNo, orderDate, orderTime, id, couponName, isAutomaticRefund,
        couponType, couponModality, couponCode, sellingPrice, originalPrice,
        ticketPrice, endDate, describe, isOpen, sellerNickName, orderState
    } = props.orderInfo

    const returnCouponModality = () => {
        if (orderState === "已支付" || orderState === "已完成") {
            return (
                <ListItem>券码
                    <div className="right">{isOpen ? couponCode :
                        <span className="couponCodeBg" onClick={() => {
                            props.openCouponRequest({
                                apiType: 'openCoupon',
                                param: {
                                    token: props.token,
                                    id: orderNo
                                }
                            })
                        }
                        }>获取券码</span>}</div>
                </ListItem>
            )
        }
    }

    const RenderBtn = () => {
        if (orderState !== "已支付" && orderState !== "已完成" && orderState !== "已取消") {
            return (
                <div className="button-bar btntab">
                    <div className="button-bar__item">
                        <button className="button-bar__button"
                                onClick={() => props.navigator.pushPage({
                                    comp: PayOrder,
                                    props: {key: "payOrder"}
                                })}>
                            <ons-icon icon="ion-android-done"> 支付</ons-icon>
                        </button>
                    </div>
                    <div className="button-bar__item">
                        <button className="button-bar__button"
                                onClick={() => {
                                    ons.notification.confirm({
                                        title: "",
                                        messageHTML: "确定要取消订单吗？",
                                        buttonLabels: ["确认", "取消"]
                                    }).then(res => {
                                        if (res === 0) {
                                            props.cancelOrderRequest({
                                                apiType: 'cancelOrder',
                                                param: {id: orderNo, token: props.token},
                                                router: () => props.navigator.popPage()
                                            })
                                        }
                                    })
                                }}>
                            <ons-icon icon="ion-android-close"> 取消</ons-icon>
                        </button>
                    </div>
                </div>
            )
        } else if
        (orderState === "已支付") {
            return (
                <div className="button-bar btntab">
                    <div className="button-bar__item">
                        <button className="button-bar__button"
                                onClick={() => {
                                    ons.notification.confirm({
                                        title: "",
                                        messageHTML: "在优惠券使用前确认收货有风险，货款将直接打给卖家," +
                                        "确定要收货吗？",
                                        buttonLabels: ["确认", "取消"]
                                    }).then(res => {
                                        if (res === 0) {
                                            props.receiptOrderRequest({
                                                apiType: 'receiptOrder',
                                                param: {id: orderNo, token: props.token},
                                                router: () => props.navigator.popPage()
                                            })
                                        }
                                    })
                                }}>
                            <ons-icon icon="ion-android-checkmark-circle"></ons-icon> 确认收货
                        </button>
                    </div>
                </div>
            )
        }
    }

    return (
        <Page renderToolbar={renderToolbar}>
            <List modifier="inset marginT">
                <ListItem>
                    <div className="left">
                        <img className='list__item__thumbnail'
                             src={`http://placekitten.com/g/40/40`}
                             alt="商品图片"/>
                    </div>
                    <div className="center">{couponName }</div>
                    <div className="right"><span className="price">{sellingPrice + "元"}</span></div>
                </ListItem>
            </List>
            <List modifier="inset marginT">
                <ListItem>卖家昵称
                    <div className="right">{sellerNickName}</div>
                </ListItem>
                <ListItem>优惠券ID
                    <div className="right">{id}</div>
                </ListItem>
                <ListItem>可自动退货
                    <div className="right">{isAutomaticRefund ? "是" : "否"}</div>
                </ListItem>
                <ListItem>优惠券类别
                    <div className="right">{couponType}</div>
                </ListItem>
                <ListItem>券码形式
                    <div className="right">{couponModality}</div>
                </ListItem>
                {returnCouponModality()}
                <ListItem>售卖价
                    <div className="right">{sellingPrice}</div>
                </ListItem>
            </List>
            <List modifier="inset marginT">
                <ListItem>原价
                    <div className="right">{originalPrice}</div>
                </ListItem>
                <ListItem>券面价
                    <div className="right">{ticketPrice}</div>
                </ListItem>
                <ListItem>截止日期
                    <div className="right">{endDate}</div>
                </ListItem>
                <ListItem>优惠券描述
                    <div className="right">{describe}</div>
                </ListItem>
                <ListItem>是否已开启
                    <div className="right">{isOpen ? "是" : "否"}</div>
                </ListItem>
                <ListItem>订单编号
                    <div className="right">{orderNo}</div>
                </ListItem>
                <ListItem>交易时间
                    <div className="right">{orderDate + " " + orderTime}</div>
                </ListItem>
            </List>
            <RenderBtn/>
        </Page>
    )
}

OrderInfo.propTypes = {}

const mapStateToProps = state => ({
    token: state.token,
    orderInfo: state.order.orderInfo,
    orderPage: state.order.page
})

export default connect(mapStateToProps, {
    openCouponRequest,
    cancelOrderRequest,
    receiptOrderRequest,
    getOrderListRequest
})(OrderInfo)
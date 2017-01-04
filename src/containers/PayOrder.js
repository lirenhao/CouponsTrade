/**
 * Author：Yky
 * Create Date：2016/12/12
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示生成订单信息的容器组件
 */
import React from 'react'
import{Page, Toolbar, BackButton} from 'react-onsenui'
import SellerInfo from '../components/orderInfo/SellerInfo'
import PaymentForm from '../components/orderInfo/PaymentForm'
import {connect} from 'react-redux'
import {payRequest} from '../actions'
import OrderResult from '../components/orderInfo/OrderResult'

const renderToolbar = () => {
    return (
        <Toolbar>
            <div className='left'><BackButton>返回</BackButton></div>
            <div className="center">确认订单</div>
        </Toolbar>
    )
}

const PayOrder = props => {
    const handleSubmit = value => {
        props.dispatch(payRequest({
            token: props.token,
            orderNo: props.orderInfo.orderNo,
            ...value,
            route: props.navigator, com: OrderResult
        }))
    }
    return (
        <Page renderToolbar={renderToolbar}>
            <SellerInfo {...props.data}/>
            <PaymentForm {...props.itemData} navigator={props.navigator}
                         onSubmit={value => handleSubmit(value)}/>
        </Page>
    )
}

const mapStateToProps = state => ({
    token: state.token,
    orderInfo: state.order.orderInfo,
    data: {name: state.order.orderInfo.sellerNickName, tel: "18688886666"},
    itemData: {item: state.order.orderInfo.couponName, price: state.order.orderInfo.sellingPrice}
})

export default connect(mapStateToProps)(PayOrder)
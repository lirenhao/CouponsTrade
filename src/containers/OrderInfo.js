/**
 * Author：Yky
 * Create Date：2016/12/14
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示已生成订单详细信息的组件
 */
import React from 'react'
import {Page, Toolbar, BackButton} from 'react-onsenui'
import {connect} from 'react-redux'
import {
  openCouponRequest, cancelOrderRequest,
  receiptOrderRequest, getOrderListRequest
} from '../actions'
import OrderInfo from '../components/OrderInfo'

const renderToolbar = () => {
  return (
    <Toolbar>
      <div className='left'><BackButton/></div>
      <div className="center">订单信息</div>
    </Toolbar>
  )
}

const Order = props => {
  return (
    <Page renderToolbar={renderToolbar}>
      <OrderInfo {...props}/>
    </Page>
  )
}

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
})(Order)
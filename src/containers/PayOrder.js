/**
 * Author：Yky
 * Create Date：2016/12/12
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示生成订单信息的容器组件
 */
import React from 'react'
import{Page, Toolbar, BackButton} from 'react-onsenui'
import OrderPay from '../components/OrderPay'
import {connect} from 'react-redux'
import {payOrderRequest} from '../actions'
import OrderResult from './OrderResult'

const renderToolbar = () => {
  return (
    <Toolbar>
      <div className='left'><BackButton/></div>
      <div className="center">确认订单</div>
    </Toolbar>
  )
}

const PayOrder = props => {
  return (
    <Page renderToolbar={renderToolbar}>
      <OrderPay orderInfo={{...props.orderInfo, sellerTel: 18612121212}}
                navigator={props.navigator}
                onSubmit={(value) =>
                  props.payOrderRequest({
                    apiType: 'pay',
                    param: {
                      token: props.token,
                      orderNo: props.orderInfo.orderNo,
                      ...value,
                    },
                    router: () => props.navigator.pushPage({
                      comp: OrderResult,
                      props: {key: "orderResult"}
                    })
                  })
                }/>
    </Page>
  )
}

const mapStateToProps = state => ({
  token: state.token,
  orderInfo: state.order.orderInfo,
})

export default connect(mapStateToProps, {payOrderRequest})(PayOrder)
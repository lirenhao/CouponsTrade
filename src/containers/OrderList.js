/**
 * Author：Yky
 * Create Date：2016/12/14
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示已生成订单列表信息的容器组件
 */
import React from 'react'
import {connect} from 'react-redux'
import {Toolbar, Page, BackButton} from 'react-onsenui'
import OrderInfo from './OrderInfo'
import PullRefresh from '../components/common/PullRefresh'
import PushRefresh from '../components/common/PushRefresh'
import {getOrderInfoRequest, getOrderListRequest} from '../actions'
import OrderList from '../components/OrderList'

class Order extends React.Component {
  renderToolbar = () => {
    return (
      <Toolbar>
        <div className='left'><BackButton/></div>
        <div className="center">我的优惠券</div>
      </Toolbar>
    )
  }

  handleClick = (row) => {
    this.props.getOrderInfoRequest({
      apiType: 'getOrderInfo',
      param: {id: row.id, token: this.props.token},
      router: () => this.props.navigator.pushPage({
        comp: OrderInfo,
        props: {key: "orderInfo"}
      })
    })
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <PullRefresh onRefresh={(done) =>
          this.props.getOrderListRequest({
            apiType: 'getOrderList',
            param: {...this.props.orderPage, token: this.props.token},
            callback: {after: [done]}
          })
        }/>
        <OrderList
          orderList={this.props.orderList}
          getOrderInfo={this.handleClick}
        />
        <PushRefresh
          hasMore={this.props.orderList.length < this.props.orderPage.total}
          onRefresh={() =>
            this.props.getOrderListRequest({
              apiType: 'insertOrderList',
              param: {
                ...this.props.orderPage,
                token: this.props.token
              }
            })
          }/>
      </Page>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
    orderList: state.order.orderList,
    orderPage: state.order.page
  }
}

export default connect(mapStateToProps,
  {getOrderInfoRequest, getOrderListRequest})(Order)
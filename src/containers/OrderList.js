/**
 * Author：Yky
 * Create Date：2016/12/14
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示已生成订单列表信息的容器组件
 */
import React from 'react'
import {connect} from 'react-redux'
import {Toolbar, Page, BackButton, List, ListItem, ListHeader} from 'react-onsenui'
import OrderInfo from './OrderInfo'
import PullRefresh from '../components/PullRefresh'
import PushRefresh from '../components/PushRefresh'
import {getOrderInfoRequest, getOrderListRequest} from '../actions'

class OrderList extends React.Component {
    renderToolbar = () => {
        return (
            <Toolbar>
                <div className='left'><BackButton/></div>
                <div className="center">我的优惠券</div>
            </Toolbar>
        )
    }

    renderRow = (row, index) => {
        const x = 40 + index
        const y = 40 + index
        return (
            <ListItem key={index} onClick={() =>
                this.props.getOrderInfoRequest({
                    apiType: 'getOrderInfo',
                    param: {id: row.id, token: this.props.token},
                    router: () => this.props.navigator.pushPage({
                        comp: OrderInfo,
                        props: {key: "orderInfo"}
                    })
                })
            }>
                <div className='left'>
                    <img src={`http://placekitten.com/g/${x}/${y}`} alt="图片" className='list__item__thumbnail'/>
                </div>
                <div className='center'>
                    <div className="list__item__title">{row.couponName}</div>
                    <div className="list__item__subtitle">{row.sellingPrice + "元"}</div>
                </div>
                <div className="right grayColor">
                    {row.orderState}
                </div>
            </ListItem>
        )
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
                <List
                    modifier="order"
                    dataSource={this.props.orderList}
                    renderRow={this::this.renderRow}
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

export default connect(mapStateToProps, {getOrderInfoRequest, getOrderListRequest})(OrderList)
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
import OrderInfo from '../components/orderInfo/OrderInfo'
import PushRefresh from '../components/PushRefresh'
import {getOrderInfoRequest, insertOrderListRequest} from '../action'

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
        const x = 40 + index;
        const y = 40 + index;
        return (
            <ListItem key={index} onClick={() => {
                this.props.dispatch(getOrderInfoRequest({
                    token: 1234567890,
                    id: row.id,
                    route: this.props.navigator,
                    com: OrderInfo
                }))
            }}>
                <div className='left'>
                    <img src={`http://placekitten.com/g/${x}/${y}`} alt="图片" className='list__item__thumbnail'/>
                </div>
                <div className='center'>
                    <div className="list__item__title">{row.couponName}</div>
                    <div className="list__item__subtitle">￥{row.sellingPrice + "元"}</div>
                </div>
                <div className="right">
                    {row.orderState}
                </div>
            </ListItem>
        )
    }

    render() {
        const hasMore = this.props.orderList.length < this.props.total
        return (
            <Page renderToolbar={this.renderToolbar}>
                <List
                    modifier="order"
                    dataSource={this.props.orderList}
                    renderRow={this::this.renderRow}
                />
                <PushRefresh
                    hasMore={this.props.orderList.length < this.props.total}
                    onRefresh={() => {
                        this.props.dispatch(insertOrderListRequest({
                            token: 1234567890,
                            number: this.props.number,
                            size: this.props.size
                        }))
                    }}/>
            </Page>
        )
    }
}

const mapStateToProps = state => {
    return {
        orderList: state.order.orderList,
        orderInfo: state.order.orderInfo,
        number: state.order.page.number,
        size: state.order.page.size,
        total: state.order.page.total
    }
};

export default connect(mapStateToProps)(OrderList)
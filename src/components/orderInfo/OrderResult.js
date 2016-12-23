/**
 * Author：Yky
 * Create Date：2016/12/14
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示支付结果的组件
 */
import React from 'react'
import {Page, Toolbar, BackButton, Button, Modal} from 'react-onsenui'
import OrderList from '../../containers/OrderList'
import Tabs from '../../containers/Tabs'
import {connect} from 'react-redux'
import {getOrderListRequest} from '../../action'

const OrderResult = ({res, navigator, dispatch, page}) => {
    const handleClick = () => {
        dispatch(getOrderListRequest(
            {
                token: 1234567890,
                ...page,
                route: navigator,
                com: {Tabs, OrderList},
                from: "order"
            }));
    };

    const haveBack = () => {
        if (res === 0) {
            return (
                <div className='left'>
                    <BackButton>返回</BackButton>
                </div>
            )
        }
    };

    const renderToolbar = () => {
        return (
            <Toolbar>
                {haveBack()}
                <div className="center">{res === 0 ? "支付失败" : "支付成功"}</div>
            </Toolbar>
        )
    };
    if (res === 0) {
        return (
            <Page renderToolbar={renderToolbar}>
                <div className="modal">
                    <div className="modal__content">
                        支付失败，请返回重新支付！
                    </div>
                </div>
            </Page>
        )
    } else {
        return (
            <Page renderToolbar={renderToolbar}>
                <div className="modal">
                    <div className="modal__content">
                        支付成功，点击按钮查看订单
                        <br/>
                        <br/>
                        <Button modifier="quiet result" onClick={handleClick}>查看订单</Button>
                    </div>
                </div>
            </Page>
        )
    }
};
const mapStateToProps = state => {
    return {page: state.order.page}
};

export default connect(mapStateToProps)(OrderResult)
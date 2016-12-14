/**
 * Created by ALIENWARE17 on 2016/12/14.
 */
import React from 'react'
import {Page, Toolbar, BackButton, Button} from 'react-onsenui'
import OrderList from '../../containers/OrderList'

const OrderResult = ({res, navigator}) => {
    const handleClick = () => {
        navigator.pushPage({
            comp: OrderList, props: {key: "OrderList"}
        })
    };
    const renderToolbar = () => {
        return (
            <Toolbar>
                <div className='left'>
                    <BackButton>返回</BackButton>
                </div>
                <div className="center">{res === 0 ? "支付失败" : "支付成功"}</div>
            </Toolbar>
        )
    };
    if (res === 0) {
        return (
            <Page renderToolbar={renderToolbar}>
                <div>
                    支付失败，请返回重新支付！
                </div>
            </Page>
        )
    } else {
        return (
            <Page renderToolbar={renderToolbar}>
                <div>
                    支付成功，点击按钮查看订单
                </div>
                <Button onClick={handleClick}>查看订单</Button>
            </Page>
        )
    }
};

export default OrderResult
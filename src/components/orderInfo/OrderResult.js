/**
 * Author：Yky
 * Create Date：2016/12/14
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示支付结果的组件
 */
import React from 'react'
import {Page, Toolbar, BackButton, Button} from 'react-onsenui'
import OrderList from '../../containers/OrderList'
import Tabs from '../../containers/Tabs'

const OrderResult = ({res, navigator}) => {
    const handleClick = () => {
        navigator.resetPageStack([
            {
                comp: Tabs, props: {key: "tabs" + Math.random(), newIndex: 2}
            },
            {
                comp: OrderList, props: {key: "OrderList"}
            },
        ])
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
                <section style={{marginTop: "60px", width: "100%", textAlign: "center"}}>
                    支付失败，请返回重新支付！
                </section>
            </Page>
        )
    } else {
        return (
            <Page renderToolbar={renderToolbar}>
                <section style={{marginTop: "60px", width: "100%", textAlign: "center"}}>
                    <p>支付成功，点击按钮查看订单</p>
                    <Button onClick={handleClick}>查看订单</Button>
                </section>
            </Page>
        )
    }
};

export default OrderResult
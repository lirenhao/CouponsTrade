/**
 * Created by ALIENWARE17 on 2016/12/12.
 */
import React from 'react'
import{Page, Toolbar, Button, Input, BackButton, Icon} from 'react-onsenui'
import Address from './Address'
import PayType from './PayType'
import ItmeInfo from './ItemInfo'
import ons from 'onsenui'

const data = {
    name: "张三",
    tel: "18688886666"
};

const itemData = {
    item: "黑松白鹿",
    price: 400
};

const Ons = require('react-onsenui');

const renderToolbar = () => {
    return (
        <Toolbar style={{"backgroundColor": "#dd1525"}}>
            <div className='left'>
                <BackButton style={{"color": "#fff"}} onClick={() => {
                    ons.notification.alert("点击这里回到上级页面", {title: "说明"})
                }}>返回</BackButton>
            </div>
            <div className="center" style={{"color": "#fff"}}>确认订单</div>
        </Toolbar>
    )
};
const PayOrder = () => {
    return (
        <Page renderToolbar={renderToolbar}>
            <Address {...data}/>
            <PayType/>
            备注：
            <textarea className="textarea" rows="5" placeholder="say something"/>
            <ItmeInfo {...itemData}/>
            <div style={{
                "position": "absolute", "bottom": "0", "width": "100%",
                "lineHeight": "40px", "overflow": "hidden"
            }}>
                应付金额：{itemData.price}元
                <Button style={{"float": "right", "backgroundColor": "#dd1525"}}
                        onClick={() => {
                            ons.notification.alert("点击这里进行模拟支付，打算用dialog，明天完成", {title: "说明"})
                        }}>支付</Button></div>
        </Page>
    )
};

export default PayOrder
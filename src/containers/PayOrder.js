/**
 * Author：Yky
 * Create Date：2016/12/12
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示生成订单信息的容器组件
 */
import React from 'react'
import{Page, Toolbar, Button, Input, BackButton, Icon} from 'react-onsenui'
import Address from '../components/orderInfo/Address'
import PayType from '../components/orderInfo/PayType'
import ItmeInfo from '../components/orderInfo/ItemInfo'
import ons from 'onsenui'

const data = {
    name: "张三",
    tel: "18688886666"
};

const itemData = {
    item: "黑松白鹿",
    price: 400
};

const renderToolbar = () => {
    return (
        <Toolbar>
            <div className='left'><BackButton/></div>
            <div className="center">确认订单</div>
        </Toolbar>
    )
};

class PayOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            payRes: false
        }
    }

    handlePay() {
        let res = ons.notification.confirm("模拟支付结果", {title: "说明", buttonLabels: ["失败", "成功"]})
        res.then(res => {
            if (res === 1) {
                this.setState({payRes: true});
                ons.notification.alert("跳转到支付成功界面", {title: "说明"})
            } else {
                ons.notification.alert("跳转到支付失败界面，询问是否要重新支付", {title: "说明"})
            }
        })
    }

    render() {
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
                            onClick={this::this.handlePay}>支付</Button></div>
            </Page>
        )
    }
}

export default PayOrder
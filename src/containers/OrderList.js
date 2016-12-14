/**
 * Author：Yky
 * Create Date：2016/12/14
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示已生成订单列表信息的容器组件
 */
import React from 'react'
import {Toolbar, Page, BackButton, List, ListItem, ListHeader} from 'react-onsenui'
import OrderInfo from '../components/orderInfo/OrderInfo'

const listData = {
    "黑松白鹿": 400,
    "大渔铁板烧": 200,
    "星巴克": 40,
    "必胜客": 80,
    "呷哺呷哺": 75
};

const itemKeys = Object.keys(listData);

const renderRow = (row, index) => {
    const x = 40 + Math.round(5 * (Math.random() - 0.5)),
        y = 40 + Math.round(5 * (Math.random() - 0.5));
    return (
        <ListItem key={index} onClick={() => console.log("11")}>
            <div className='left'>
                <img src={`http://placekitten.com/g/${x}/${y}`} alt="图片" className='list__item__thumbnail'/>
            </div>
            <div className='center'>
                {row}<span>{listData[row] + "元"}</span>
            </div>
        </ListItem>
    );
};

class OrderList extends React.Component {
    renderToolbar = () => {
        return (
            <Toolbar>
                <div className='left'><BackButton/></div>
                <div className="center">我的订单</div>
            </Toolbar>
        )
    }

    renderRow = (row, index) => {
        const x = 40 + Math.round(5 * (Math.random() - 0.5))
        const y = 40 + Math.round(5 * (Math.random() - 0.5))
        return (
            <ListItem key={index} onClick={() => this.props.navigator.pushPage({
                comp: OrderInfo,
                props: {key: "orderInfo", username: 'username', sellName: 'sellName', itemName: 'itemName', orderId: 'orderId', orderTime: 'orderTime', price: 123}
            })}>
                <div className='left'>
                    <img src={`http://placekitten.com/g/${x}/${y}`} alt="图片" className='list__item__thumbnail'/>
                </div>
                <div className='center'>
                    {row}<span>{listData[row] + "元"}</span>
                </div>
            </ListItem>
        )
    }

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <List
                    dataSource={itemKeys}
                    renderRow={this.renderRow.bind(this)}
                    renderHeader={() => <ListHeader>订单列表</ListHeader>}
                />
            </Page>
        )
    }
}

export default OrderList
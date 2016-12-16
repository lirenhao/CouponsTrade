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
import Tabs from './Tabs'

const listData = {
    "黑松白鹿": 400,
    "大渔铁板烧": 200,
    "星巴克": 40,
    "必胜客": 80,
    "呷哺呷哺": 75
};

const itemKeys = Object.keys(listData);
let index = 0;
class OrderList extends React.Component {
    renderToolbar = () => {
        return (
            <Toolbar>
                <div className='left'><BackButton onClick={() => {
                    this.props.navigator.resetPageStack([{
                        comp: Tabs,
                        props: {
                            key: "tabs" + index++,
                            newIndex: 2
                        }
                    }])
                }}>返回</BackButton></div>
                <div className="center">我的订单</div>
            </Toolbar>
        )
    };

    renderRow = (row, index) => {
        const x = 40 + index;
        const y = 40 + index;
        return (
            <ListItem key={index} onClick={() => this.props.navigator.pushPage({
                comp: OrderInfo,
                props: {
                    key: "orderInfo",
                    username: '张三',
                    sellName: '李四',
                    itemName: row,
                    orderId: "000" + index,
                    orderTime: "2016-12-14",
                    price: listData[row],
                    handleClick: () => {
                        console.log("预留事件")
                    }
                }
            })}>
                <div className='left'>
                    <img src={`http://placekitten.com/g/${x}/${y}`} alt="图片" className='list__item__thumbnail'/>
                </div>
                <div className='center'>
                    {row}<span>{listData[row] + "元"}</span>
                </div>
            </ListItem>
        )
    };

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
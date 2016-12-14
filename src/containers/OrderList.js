/**
 * Author：Yky
 * Create Date：2016/12/14
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示已生成订单列表信息的容器组件
 */
import React from 'react'
import {Toolbar, Page, BackButton, List, ListItem, ListHeader} from 'react-onsenui'
import ons from 'onsenui'

const listData = {
    "黑松白鹿": 400,
    "大渔铁板烧": 200,
    "星巴克": 40,
    "必胜客": 80,
    "呷哺呷哺": 75
};

const itemKeys = Object.keys(listData);

const renderToolbar = () => {
    return (
        <Toolbar style={{"backgroundColor": "#dd1525"}}>
            <div className='left'>
                <BackButton style={{"color": "#fff"}} onClick={() => {
                    ons.notification.alert("点击这里回到上级页面", {title: "说明"})
                }}>返回</BackButton>
            </div>
            <div className="center" style={{"color": "#fff"}}>我的订单</div>
        </Toolbar>
    )
};
const renderRow = (row, index) => {
    const x = 40 + Math.round(5 * (Math.random() - 0.5)),
        y = 40 + Math.round(5 * (Math.random() - 0.5));
    return (
        <ListItem key={index}>
            <div className='left'>
                <img src={`http://placekitten.com/g/${x}/${y}`} alt="图片" className='list__item__thumbnail'/>
            </div>
            <div className='center'>
                {row}<span>{listData[row] + "元"}</span>
            </div>
        </ListItem>
    );
};

const OrderList = () => {
    return (
        <Page renderToolbar={renderToolbar}>
            <List
                dataSource={itemKeys}
                renderRow={renderRow}
                renderHeader={() => <ListHeader>订单列表</ListHeader>}
            />
        </Page>
    )
};

export default OrderList
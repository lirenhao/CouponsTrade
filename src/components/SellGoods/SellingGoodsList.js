/**
 * Author：pengfei
 * Create Date：2016/12/13
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import {List, ListHeader} from 'react-onsenui'
import ViewCouponDetail from '../../containers/ViewCouponDetail'
import GoodsInfo from './GoodsInfo'

//测试数据，容器完成后再删除
const testData = [
    {goodsTitle: "星巴克", newPrise: 20, description: "北京所有分店"},
    {goodsTitle: "肯德基", newPrise: 20, description: "北京所有分店"},
    {goodsTitle: "火锅", newPrise: 20, description: "北京所有分店"}
];

const SellingGoodsList = ({data, navigator})=> {
    const onClick = () => navigator.pushPage({
        comp: ViewCouponDetail, props: {key: "ViewCouponDetail"}
    });

    const renderRow = (row)=> {
        return (
            <GoodsInfo key={row.goodsTitle} {...row} onClick={onClick}/>
        )
    };

    return (
        <List dataSource={data}
              renderRow={renderRow}
              renderHeader={() => <ListHeader>发布中的商品列表</ListHeader>}
        />
    )
};

SellingGoodsList.propTypes = {
    data: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            goodsTitle: React.PropTypes.string.isRequired,
            newPrise: React.PropTypes.number.isRequired,
            description: React.PropTypes.string.isRequired
        })).isRequired,
    navigator:React.PropTypes.object.isRequired
};

export default SellingGoodsList


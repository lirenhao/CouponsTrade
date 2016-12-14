/**
 * Author：pengfei
 * Create Date：2016/12/13
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 发售中的商品列表
 */
import React from 'react'
import {List, ListHeader} from 'react-onsenui'
import ViewCouponDetail from '../../containers/ViewCouponDetail'
import GoodsInfo from './GoodsInfo'

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


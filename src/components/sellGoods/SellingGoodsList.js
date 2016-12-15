/**
 * Author：pengfei
 * Create Date：2016/12/13
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 发售中的商品列表
 */
import React from 'react'
import {List, ListHeader} from 'react-onsenui'
import GoodsInfo from './GoodsInfo'

const SellingGoodsList = ({data, onClickPushPage})=> {

    const renderRow = (row)=> {
        return (
            <GoodsInfo key={row.couponName} {...row} onClick={onClickPushPage}/>
        )
    };

    return (
        <List dataSource={data}
              renderHeader={() => <ListHeader>优惠券列表</ListHeader>}
              renderRow={renderRow}
        />
    )
};

SellingGoodsList.propTypes = {
    data: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            couponName: React.PropTypes.string.isRequired,
            sellingPrice: React.PropTypes.number.isRequired,
            description: React.PropTypes.string.isRequired
        })).isRequired,
    onClickPushPage: React.PropTypes.func.isRequired
};

export default SellingGoodsList


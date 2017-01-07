/**
 * Author：pengfei
 * Create Date：2016/12/13
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 发售中的商品列表
 */
import React from 'react'
import {List} from 'react-onsenui'
import CouponInfo from './CouponInfo'

const CouponList = ({couponList, onClickPushPage, navigator, token}) => {

    const renderRow = (row) => {
        return (
            <CouponInfo key={row.id} couponName={row.couponName} sellingPrice={row.sellingPrice}
                        describe={row.describe} onClick={() => onClickPushPage(row.id)}/>
        )
    }  

    return ( <List dataSource={couponList} renderRow={renderRow}/>    )
}  

CouponList.propTypes = {
    couponList: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            id: React.PropTypes.string.isRequired,
            couponName: React.PropTypes.string.isRequired,
            sellingPrice: React.PropTypes.number.isRequired,
            describe: React.PropTypes.string.isRequired
        })).isRequired,
    onClickPushPage: React.PropTypes.func.isRequired,
    navigator: React.PropTypes.object.isRequired,
    token: React.PropTypes.string
}  

export default CouponList
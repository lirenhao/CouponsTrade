/**
 * Author：pengfei
 * Create Date：2016/12/14
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */


import React from 'react'
import SearchCouponList from '../components/sellCoupon/SearchCouponList'
import ViewCouponsDetail from '../containers/ViewCouponsDetail'
import ons from 'onsenui'

const SearchCoupons = (props)=> {
    const {navigator} = props
    return (
            <SearchCouponList data={[
                {couponName: "星巴克", sellingPrice: 20, description: "北京所有分店"},
                {couponName: "肯德基", sellingPrice: 20, description: "北京所有分店"},
                {couponName: "火锅", sellingPrice: 20, description: "北京所有分店"}
            ]} onClickPushPage={() => navigator.pushPage({
                comp: ViewCouponsDetail, props: {key: "ViewCouponsDetail"}
            })} onSearch={(value)=>{ ons.notification.alert(value)}}/>
    )
};

export default SearchCoupons
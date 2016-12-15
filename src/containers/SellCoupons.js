/**
 * Author：pengfei
 * Create Date：2016/12/14
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import {Page,Toolbar,BackButton} from 'react-onsenui'
import SellingCouponList from '../components/sellCoupon/SellingCouponList'
import PublishCouponsDetail from './PublishCouponsDetail'

const SellingCoupons = (props)=> {
    const {data, navigator} = props;
    return (
        <Page renderToolbar={() => (
            <Toolbar>
                <div className='left'>
                    <BackButton/>
                </div>
                <div className='center'>发布的优惠券</div>
            </Toolbar>
        )}>
            <SellingCouponList data={
                [
                    {couponName: "星巴克", sellingPrice: 20, description: "北京所有分店"},
                    {couponName: "肯德基", sellingPrice: 20, description: "北京所有分店"},
                    {couponName: "火锅", sellingPrice: 20, description: "北京所有分店"}
                ]
            } onClickPushPage={ () => navigator.pushPage({
                comp: PublishCouponsDetail, props: {key: "PublishCouponsDetail"+ Math.random()}
            })}/>
        </Page>
    )
}

export default SellingCoupons
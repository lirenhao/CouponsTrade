/**
 * Author：pengfei
 * Create Date：2016/12/15
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */

import React from 'react'
import EditCoupon from '../components/sellCoupon/EditCoupon'
import SellingCoupons from './SellCoupons'

const EditCoupons = (props)=> {
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
            <EditCoupon couponInfo={
                {couponName: "星巴克", sellingPrice: "60", description: "北京所有分店" ,couponCode:"11111111",originalPrice:"50",TicketPrice:"70",effectiveDate:"2016/12/10",isAutomaticRefund:true}}
                        onClickPushPage={ () => navigator.pushPage({
                comp: SellingCoupons, props: {key: "SellCoupons"}
            })}/>
        </Page>
    )
}

export default EditCoupons
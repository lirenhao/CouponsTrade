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
import {Page,Toolbar,BackButton} from 'react-onsenui'
import ons from 'onsenui'


const EditCoupons = (props)=> {
     const {navigator} = props;
    const handleEditClick = () => {
            ons.notification.confirm("是否确认提交", {title: "说明", buttonLabels: ["否", "是"]}).then(
                res => {
                    if (res === 1) {
                        navigator.popPage()
                    }
                }
            )
        }
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
                {couponName: "星巴克",couponCode:"11111111",originalPrice:"50", sellingPrice: "60", TicketPrice:"70",effectiveDate:"2016-12-10",isAutomaticRefund:true,description: "北京所有分店" }}
                        onSubmit={ handleEditClick}/>
        </Page>
    )
}

export default EditCoupons
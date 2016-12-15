/**
 * Author：pengfei
 * Create Date：2016/12/14
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */

import React from 'react'
import PublishGoods from '../components/sellGoods/PublishCoupon'
import SellingCoupons from './SellCoupons'
import ons from 'onsenui'

const PublishCoupon =(props)=>{
    const {navigator} = props
    const handleClick = () => {
        ons.notification.confirm("是否确认发布", {title: "说明", buttonLabels: ["否", "是"]}).then(
            res => {
                if (res === 1)  {
                    navigator.pushPage({
                        comp: SellingCoupons, props: {key: "SellingCoupons"}
                    })
                }
            }
        )
    };
    return(
        <PublishGoods onSubmit={handleClick}/>
    )
}

export default PublishCoupon
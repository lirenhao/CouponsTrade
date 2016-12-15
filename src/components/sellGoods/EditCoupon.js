/**
 * Author：pengfei
 * Create Date：2016/12/13
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 编辑商品组建
 */


import React from 'react'
import PublishCoupon from './PublishCoupon'


const EditCoupon = (props)=> {
    const {onSubmit, couponInfo} = props;
    return (
        <div>
            <PublishCoupon onSubmit={onSubmit}
                          initialValues={couponInfo}/>
        </div>
    )
};

EditCoupon.propTypes = {
    couponInfo: React.PropTypes.shape({
        couponName: React.PropTypes.string.isRequired,
        couponCode:React.PropTypes.string.isRequired,
        originalPrice:React.PropTypes.string.isRequired,
        sellingPrice: React.PropTypes.string.isRequired,
        TicketPrice:React.PropTypes.string.isRequired,
        effectiveDate:React.PropTypes.string.isRequired,
        isAutomaticRefund:React.PropTypes.bool.isRequired,
        description: React.PropTypes.string.isRequired
    }).isRequired,
    onSubmit: React.PropTypes.func.isRequired
};


export default EditCoupon




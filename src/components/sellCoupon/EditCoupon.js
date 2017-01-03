/**
 * Author：pengfei
 * Create Date：2016/12/13
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 编辑商品组建
 */
import React from 'react'
import EditCouponForm from  './EditCouponForm'


const EditCoupon = (props)=> {
    const {onSubmit, couponInfo} = props
    return (
        <div>
            <EditCouponForm onSubmit={onSubmit}
                            initialValues={{
                                ...couponInfo,
                                originalPrice: couponInfo.originalPrice.toString(),
                                sellingPrice: couponInfo.sellingPrice.toString(),
                                ticketPrice: couponInfo.ticketPrice.toString()
                            }}/>
        </div>
    )
}

EditCoupon.propTypes = {
    couponInfo: React.PropTypes.shape({
        couponName: React.PropTypes.string.isRequired,
        couponCode: React.PropTypes.string.isRequired,
        originalPrice: React.PropTypes.number.isRequired,
        sellingPrice: React.PropTypes.number.isRequired,
        ticketPrice: React.PropTypes.number.isRequired,
        endDate: React.PropTypes.string.isRequired,
        isAutomaticRefund: React.PropTypes.bool.isRequired,
        describe: React.PropTypes.string.isRequired
    }).isRequired,
    onSubmit: React.PropTypes.func.isRequired
}


export default EditCoupon





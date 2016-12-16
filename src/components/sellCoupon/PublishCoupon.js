/**
 * Author：pengfei
 * Create Date：2016/12/8
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 发布商品组建
 */
import React from 'react'
import { reduxForm} from 'redux-form'
import { Button} from 'react-onsenui'
import CouponFields from  './CouponFields'

const PublishCoupon = (props)=> {
    const {handleSubmit, onSubmit, invalid, submitting } = props;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section>
                <CouponFields/>
                <Button modifier="large marginLR" disabled={invalid || submitting} onClick={props.submit}>确认发布</Button>
            </section>
        </form>
    )
};

PublishCoupon.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
};

const validate = (value) => {
    const errors = {};
    if (!value.couponName) {
        errors.couponName = 'Required'
    }
    if (!value.couponCode) {
        errors.couponCode = 'Required'
    }
    if (!value.originalPrice) {
        errors.originalPrice = 'Required'
    }
    if (!value.sellingPrice) {
        errors.sellingPrice = 'Required'
    }
    if (!value.effectiveDate) {
        errors.effectiveDate = 'Required'
    }
    return errors
};

export default reduxForm({
    form: "PublishCoupon", validate
}) (PublishCoupon)

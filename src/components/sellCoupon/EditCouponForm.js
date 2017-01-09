/**
 * Author：pengfei
 * Create Date：2016/12/15
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */


import React from 'react'
import {reduxForm} from 'redux-form'
import {Button} from 'react-onsenui'
import CouponFields from  './CouponFields'


const EditCouponForm = (props)=> {
    const {handleSubmit, onSubmit, invalid, submitting} = props
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section>
                <CouponFields invalid={invalid} submitting={submitting} buttonName="确认提交" onSubmit={props.submit}/>
            </section>
        </form>
    )
}

EditCouponForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
};

const validate = (value) => {
    const errors = {}
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
    if (!value.endDate) {
        errors.endDate = 'Required'
    }
    return errors
}

export default reduxForm({
    form: "EditCouponForm", validate
})(EditCouponForm)
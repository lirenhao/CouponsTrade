/**
 * Author：pengfei
 * Create Date：2016/12/8
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 发布商品组建
 */
import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {Button} from 'react-onsenui'
import CouponFields from  './CouponFields'
import SideSelect from './SideSelect'

class PublishCoupon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isOpen: false, radio: ""}
        this.handleClick = this.handleClick.bind(this)
        this.handleHide = this.handleHide.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }

    handleClick(radio) {
        this.setState({radio})
    }

    handleHide() {
        this.setState({isOpen: false})
    }

    handleShow() {
        this.setState({isOpen: true})
    }

    render() {
        const {handleSubmit, onSubmit, invalid, submitting} = this.props;
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <Field name="test" component={SideSelect}
                       props={{
                           isOpen: this.state.isOpen,
                           listItem: [{title: "item-1", value: "1"}, {title: "item-2", value: "2"}],
                           handleClick: this.handleClick, handleHide: this.handleHide
                       }}>
                    <section>
                        <Button onClick={this.handleShow}>test-{this.state.radio}</Button>
                        <CouponFields/>
                        <Button modifier="large marginTLR" disabled={invalid || submitting}
                                onClick={this.props.submit}>确认发布</Button>
                    </section>
                </Field>
            </form>
        )
    }
}

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
})(PublishCoupon)

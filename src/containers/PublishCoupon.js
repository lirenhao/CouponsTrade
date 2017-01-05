/**
 * Author：pengfei
 * Create Date：2016/12/14
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */

import React from 'react'
import PublishCoupon from '../components/sellCoupon/PublishCoupon'
import Tabs from './Tabs'
import ons from 'onsenui'
import {connect} from 'react-redux'
import {publishCouponRequest} from '../actions'


class PublishCoupons extends React.Component {
    render() {
        return (<PublishCoupon onSubmit={(value)=>this.props.handleClick({
            ... value,
            token: this.props.token
        }, this.props.navigator, {comp: Tabs, props: {key: "Tabs"}})}/>)
    }
}

const mapStateToProps = (state) => ({
    token: state.token
})

const mapDispatchToProps = (dispatch) => ({
    handleClick: (param, navigator, routeData) => {
        ons.notification.confirm("是否确认发布", {title: "注意", buttonLabels: ["否", "是"]}).then(
            res => {
                if (res === 1) {
                    dispatch(publishCouponRequest({param, navigator, routeData}))
                }
            }
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PublishCoupons)
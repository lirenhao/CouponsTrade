/**
 * Author：pengfei
 * Create Date：2016/12/14
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import {connect} from 'react-redux'
import ons from 'onsenui'
import PublishCouponForm from '../components/SaleCreate'
import {publishCouponRequest, showDialog} from '../actions'

const PublishCoupons = props => {
  return (
    <PublishCouponForm onSubmit={value =>
      ons.notification.confirm("是否确认发布", {title: "注意", buttonLabels: ["否", "是"]})
        .then(res => {
            if (res === 1) {
              props.publishCouponRequest({
                apiType: 'publishCoupon',
                param: {...value, token: props.token},
                handle: {
                  success: [() => showDialog("发布成功")]
                }
              })
            }
          }
        )
    }/>
  )
}

const mapStateToProps = (state) => ({
  token: state.token
})

export default connect(mapStateToProps, {publishCouponRequest})(PublishCoupons)
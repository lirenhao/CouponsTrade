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
import {Page, Toolbar, BackButton} from 'react-onsenui'
import ons from 'onsenui'
import {editUserCouponRequest} from '../actions'
import {connect} from 'react-redux'

class EditCoupons extends React.Component {
    render() {
        return (
            <Page renderToolbar={() => (
                <Toolbar>
                    <div className='left'>
                        <BackButton/>
                    </div>
                    <div className='center'>发布的优惠券</div>
                </Toolbar>
            )}>
                <EditCoupon couponInfo={this.props.couponInfo}
                            onSubmit={(value)=>this.props.onEditClick(value, this.props.token, this.props.navigator)}/>
            </Page>
        )
    }
}

const mapStateToProps = (state)=>(
{
    couponInfo: state.publishedCoupons.couponInfo,
    token: state.token
}
)

const mapDispatchToProps = (dispatch)=>(
{
    onEditClick: (param, token, navigator)=> {
        ons.notification.confirm("是否确认提交", {title: "说明", buttonLabels: ["否", "是"]}).then(
            res => {
                if (res === 1) {
                    dispatch(editUserCouponRequest({param, token, navigator}))
                }
            }
        )

    }
}
)

export default connect(mapStateToProps, mapDispatchToProps)(EditCoupons)
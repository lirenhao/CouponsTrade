/**
 * Author：pengfei
 * Create Date：2016/12/15
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */

import React from 'react'
import EditCouponForm from '../components/sellCoupon/EditCouponForm'
import {Page, Toolbar, BackButton} from 'react-onsenui'
import ons from 'onsenui'
import {updateUserCouponRequest} from '../actions'
import {connect} from 'react-redux'

class EditCoupons extends React.Component {
    render() {
        return (
            <Page renderToolbar={() => (
                <Toolbar>
                    <div className='left'>
                        <BackButton onClick={()=>
                            this.props.updateUserCouponRequest(
                                {
                                    apiType: 'editUserCoupon',
                                    param: {id:this.props.couponInfo.id, token: this.props.token},
                                    router: () => this.props.navigator.popPage()
                                })
                        }/>
                    </div>
                    <div className='center'>编辑优惠券</div>
                </Toolbar>
            )}>
                <EditCouponForm
                    onSubmit={(value)=>
                        ons.notification.confirm("是否确认提交", {title: "说明", buttonLabels: ["否", "是"]}).then(
                            res => {
                                if (res === 1) {
                                    this.props.updateUserCouponRequest(
                                        {
                                            apiType: 'editUserCoupon',
                                            param: {...value, token: this.props.token},
                                            router: () => this.props.navigator.popPage()
                                        })
                                }
                            }
                        )
                    }
                    initialValues={{
                        ...this.props.couponInfo,
                        originalPrice: this.props.couponInfo.originalPrice.toString(),
                        sellingPrice: this.props.couponInfo.sellingPrice.toString(),
                        ticketPrice: this.props.couponInfo.ticketPrice.toString()
                    }}/>
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

export default connect(mapStateToProps, {updateUserCouponRequest})(EditCoupons)
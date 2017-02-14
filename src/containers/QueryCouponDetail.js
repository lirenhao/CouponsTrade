/**
 * Author：likon
 * Create Date：2016/12/13
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 首页优惠券列表中查看优惠券详细信息容器
 */

import React from 'react'
import {connect} from 'react-redux'
import {Page, Toolbar, BackButton, Button} from 'react-onsenui'
import PayOrder from './PayOrder'
import CouponDetail from '../components/CouponInfo'
import {createOrderRequest} from '../actions'

class ViewCouponsDetail extends React.Component {

    render() {
        return (
            <Page renderToolbar={() => (
                <Toolbar>
                    <div className='left'>
                        <BackButton/>
                    </div>
                    <div className='center'>优惠券详细信息</div>
                </Toolbar>
            )}

            >
                <CouponDetail
                    couponInfo={this.props.couponInfo}>
                </CouponDetail>
                    <Button modifier="large marginTLR marginB" type="submit" onClick={() =>
                        this.props.createOrderRequest({
                            apiType: 'createOrder',
                            param: {
                                id: this.props.couponInfo.id,
                                token: this.props.token
                            },
                            router: () => this.props.navigator.pushPage({
                                comp: PayOrder,
                                props: {key: "PayOrder"}
                            })
                        })
                    }>
                        我要买
                    </Button>
            </Page>
        )
    }
}


const mapStateToProps = (state) => ({
    token: state.token,
    couponInfo: state.queryCoupons.couponInfo
})

export default connect(mapStateToProps, {createOrderRequest})(ViewCouponsDetail)

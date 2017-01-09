/**
 * Author：pengfei
 * Create Date：2016/12/14
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import {connect} from 'react-redux'
import {Page, Toolbar, BackButton} from 'react-onsenui'
import CouponList from '../components/sellCoupon/CouponList'
import PushRefresh from '../components/PushRefresh'
import PublishCouponsDetail from './PublishCouponsDetail'
import {getUserCouponInfoRequest, getUserCouponListRequest} from '../actions'

class SellingCoupons extends React.Component {
    render() {
        return (
            <Page renderToolbar={() => (
                <Toolbar>
                    <div className='left'><BackButton/></div>
                    <div className='center'>发布的优惠券</div>
                </Toolbar>
            )}>
                <CouponList couponList={this.props.couponList }
                            navigator={this.props.navigator}
                            token={this.props.token}
                            onClickPushPage={(id) =>
                                this.props.getUserCouponInfoRequest({
                                    apiType: 'getCouponDetails',
                                    param: {id, token: this.props.token},
                                    router: () => this.props.navigator.pushPage({
                                        comp: PublishCouponsDetail,
                                        props: {key: "publishCouponsDetail"}
                                    })
                                })}
                />
                <PushRefresh hasMore={this.props.couponList.length < this.props.page.total}
                             onRefresh={() =>
                                 this.props.getUserCouponListRequest({
                                     apiType: 'refreshUserCouponList',
                                     param: {
                                         ...this.props.page,
                                         token: this.props.token
                                     }
                                 })
                             }
                />
            </Page>
        )
    }
}

const mapStateToProps = (state) => ({
    couponList: state.publishedCoupons.couponList,
    token: state.token,
    page: state.publishedCoupons.page
})

export default connect(mapStateToProps, {getUserCouponInfoRequest, getUserCouponListRequest})(SellingCoupons)
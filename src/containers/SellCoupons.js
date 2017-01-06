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
                            onClickPushPage={this.props.onClickPushPage}/>
                <PushRefresh hasMore={this.props.couponList.length < this.props.page.total}
                             onRefresh={() => {
                                 this.props.onRefresh(this.props.token, this.props.page)
                             }}/>
            </Page>
        )
    }
}

const mapStateToProps = (state) => ({
    couponList: state.publishedCoupons.couponList,
    token: state.token,
    page: state.publishedCoupons.page
})

const mapDispatchToProps = (dispatch) => (
    {
        onClickPushPage: (token, id, navigator) => {
            dispatch(getCouponDetailsRequest({
                token,
                id,
                navigator,
                routeData: {comp: PublishCouponsDetail, props: {key: "PublishCouponsDetail"}}
            }))
        },
        onRefresh: (token, page) => {
            dispatch(refreshUserCouponListRequest({token, page}))
        }

    }
)

export default connect(mapStateToProps, {getUserCouponInfoRequest, getUserCouponListRequest})(SellingCoupons)
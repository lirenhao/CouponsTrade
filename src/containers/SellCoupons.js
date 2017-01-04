/**
 * Author：pengfei
 * Create Date：2016/12/14
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import {Page, Toolbar, BackButton} from 'react-onsenui'
import SellingCouponList from '../components/sellCoupon/SellingCouponList'
import PublishCouponsDetail from './PublishCouponsDetail'
import PushRefresh from '../components/PushRefresh'
import {getCouponDetailsRequest, refreshUserCouponListRequest} from '../actions'
import {connect} from 'react-redux'

class SellingCoupons extends React.Component {
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
                <SellingCouponList couponList={this.props.couponList }
                                   navigator={this.props.navigator}
                                   token={this.props.token}
                                   onClickPushPage={this.props.onClickPushPage}/>
                <PushRefresh hasMore={this.props.couponList.length < this.props.page.total}
                             onRefresh={()=> {
                                 this.props.onRefresh(this.props.token, this.props.page)
                             }}/>
            </Page>
        )
    }
}

const mapStateToProps = (state)=>(
{
    couponList: state.publishedCoupons.couponList,
    token: state.token,
    page: state.publishedCoupons.page
}
)

const mapDispatchToProps = (dispatch)=>(
{
    onClickPushPage: (token, id, navigator)=> {
        dispatch(getCouponDetailsRequest({
            token,
            id,
            navigator,
            routeData: {comp: PublishCouponsDetail, props: {key: "PublishCouponsDetail"}}
        }))
    },
    onRefresh: (token, page)=> {
        dispatch(refreshUserCouponListRequest({token, page}))
    }

}
)

export default connect(mapStateToProps, mapDispatchToProps)(SellingCoupons)
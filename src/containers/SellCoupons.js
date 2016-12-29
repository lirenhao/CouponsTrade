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
import {getCouponDetailsRequest} from '../action'
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
                <SellingCouponList data={this.props.data }
                                   navigator={this.props.navigator}
                                   onClickPushPage={this.props.onClickPushPage}/>
            </Page>
        )
    }
}

const mapStateToProps = (state)=>(
{
    data: state.publishedCoupons.couponList,
    token: state.token
}
)

const mapDispatchToProps = (dispatch)=>(
{
    onClickPushPage: (id, navigator)=> {
        dispatch(getCouponDetailsRequest({id, navigator, routeData:{comp: PublishCouponsDetail, props: {key: "PublishCouponsDetail"}}}))
    }
}
)

export default connect(mapStateToProps,mapDispatchToProps)(SellingCoupons)
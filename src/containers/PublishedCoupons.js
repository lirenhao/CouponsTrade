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
import CouponList from '../components/CouponList'
import PushRefresh from '../components/common/PushRefresh'
import PullRefresh from '../components/common/PullRefresh'
import PublishedCouponDetail from './PublishedCouponDetail'
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
        <PullRefresh onRefresh={(done) =>
          this.props.getUserCouponListRequest({
            apiType: 'getUserCoupons',
            param: {...this.props.page, number: 0, token: this.props.token},
            callback: {after: [done]}
          })
        }/>
        <CouponList couponList={this.props.couponList }
                    navigator={this.props.navigator}
                    token={this.props.token}
                    onClickPushPage={(id) =>
                      this.props.getUserCouponInfoRequest({
                        apiType: 'getCouponDetails',
                        param: {id, token: this.props.token},
                        router: () => this.props.navigator.pushPage({
                          comp: PublishedCouponDetail,
                          props: {key: "PublishedCouponDetail"}
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
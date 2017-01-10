/**
 * Author：pengfei
 * Create Date：2016/12/14
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import {connect} from 'react-redux'
import PullRefresh from '../components/PullRefresh'
import TypeSelect from '../components/sellCoupon/TypeSelect'
import CouponList from '../components/sellCoupon/CouponList'
import QueryCouponDetail from './QueryCouponDetail'
import PushRefresh from '../components/PushRefresh'
import {getCouponsListRequest, getCouponsInfoRequest} from '../actions'

class SearchCoupons extends React.Component {
    render() {
        return (
            <div>
                <PullRefresh onRefresh={(done) =>
                    this.props.getCouponsListRequest({
                        apiType: 'queryCoupons',
                        param: {
                            ...this.props.page,
                            number: 0,
                            ...this.props.query,
                            token: this.props.token
                        },
                        callback: {after: [done]}
                    })
                }/>
                <section>
                    <input type="search" placeholder="商品名称" className="search-input"
                           onBlur={(event) =>
                               this.props.getCouponsListRequest({
                                   apiType: 'queryCoupons',
                                   param: {
                                       ...this.props.page,
                                       token: this.props.token,
                                       couponName: event.target.value
                                   }
                               })
                           }/>
                    <TypeSelect/>
                </section>
                <CouponList couponList={this.props.couponList} navigator={this.props.navigator}
                            token={this.props.token} onClickPushPage={(id) =>
                    this.props.getCouponsInfoRequest({
                        apiType: 'getCouponDetails',
                        param: {id, token: this.props.token},
                        router: () => this.props.navigator.pushPage({
                            comp: QueryCouponDetail,
                            props: {key: "QueryCouponDetail"}
                        })
                    })
                }/>
                <PushRefresh
                    hasMore={this.props.couponList.length < this.props.page.total}
                    onRefresh={() =>
                        this.props.getCouponsListRequest({
                            apiType: 'refreshCouponList',
                            param: {
                                ...this.props.page,
                                ...this.props.query,
                                token: this.props.token
                            }
                        })
                    }/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.token,
    couponList: state.queryCoupons.couponList,
    page: state.queryCoupons.page,
    query: state.queryCoupons.query
}
)

export default connect(mapStateToProps, {getCouponsListRequest, getCouponsInfoRequest})(SearchCoupons)
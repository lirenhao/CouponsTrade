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
import CouponList from '../components/sellCoupon/CouponList'
import ViewCouponsDetail from '../containers/ViewCouponsDetail'
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
                            token: this.props.token,
                            couponName: this.props.query
                        },
                        callback: {after: [done]}
                    })
                }/>
                <section>
                    <input type="search" placeholder="商品名称" className="search-input"
                           onBlur={(e) => this.props.onSearch(e.target.value) }/>
                </section>
                <CouponList couponList={this.props.couponList} navigator={this.props.navigator} token={this.props.token}
                            onClickPushPage={this.props.onPushPage}/>
                <PushRefresh
                    hasMore={this.props.couponList.length < this.props.page.total}
                    onRefresh={() =>
                        this.props.getCouponsListRequest({
                            apiType: 'refreshCouponList',
                            param: {
                                ...this.props.page,
                                token: this.props.token,
                                couponName: this.props.query
                            }
                        })
                    }/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        couponList: state.queryCoupons.couponList,
        page: state.queryCoupons.page,
        token: state.token,
        query: state.queryCoupons.query.couponName
    }
)

const mapDispatchToProps = (dispatch) => ({
    onSearch: (param) => {
        if (param.replace(/\s/g, "") !== "") {
            dispatch(queryCouponsRequest(param))
        }
    },
    onPushPage: (token, id, navigator) => {
        dispatch(getCouponDetailsRequest({
            token, id, navigator,
            routeData: {
                comp: ViewCouponsDetail,
                props: {key: "ViewCouponsDetail"}
            },
            dataFlag: "0"
        }))
    },
    onRefresh: (token, query, page) => {
        dispatch(refreshCouponListRequest({token, query, page}))
    }
})

export default connect(mapStateToProps, {getCouponsListRequest, getCouponsInfoRequest})(SearchCoupons)
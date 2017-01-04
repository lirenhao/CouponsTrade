/**
 * Author：pengfei
 * Create Date：2016/12/14
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */


import React from 'react'
import SearchCouponList from '../components/sellCoupon/SearchCouponList'
import ViewCouponsDetail from '../containers/ViewCouponsDetail'
import {queryCouponsRequest, getCouponDetailsRequest, refreshCouponListRequest} from '../actions'
import {connect} from 'react-redux'


class SearchCoupons extends React.Component {
    render() {
        return (
            <SearchCouponList couponList={this.props.couponList}
                              onClickPushPage={this.props.onPushPage}
                              onSearch={(value)=> {
                                  this.props.onSearch(value)
                              }}
                              token={this.props.token}
                              navigator={this.props.navigator}
                              page={this.props.page}
                              onRefresh={()=>this.props.onRefresh(this.props.token, this.props.query, this.props.page.total, this.props.page.number, this.props.page.size)}
            />
        )
    }
}

const mapStateToProps = (state)=>({
    couponList: state.queryCoupons.couponList,
    page: state.queryCoupons.page,
    token: state.token,
    query: state.queryCoupons.query.couponName
}
)

const mapDispatchToProps = (dispatch)=>({
    onSearch: (param)=> {
        if (param.replace(/\s/g, "") !== "") {
            dispatch(queryCouponsRequest(param))
        }
    },
    onPushPage: (token, id, navigator)=> {
        dispatch(getCouponDetailsRequest({
            token, id, navigator,
            routeData: {
                comp: ViewCouponsDetail,
                props: {key: "ViewCouponsDetail"}
            },
            dataFlag: "0"
        }))
    },
    onRefresh: (token, query, total, number, size)=> {
        dispatch(refreshCouponListRequest({token, query, total, number, size}))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCoupons)
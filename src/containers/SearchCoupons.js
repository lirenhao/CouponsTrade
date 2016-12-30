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
import {queryCouponsRequest, getCouponDetailsRequest} from '../actions'
import {connect} from 'react-redux'


class SearchCoupons extends React.Component {
    render() {
        return (
            <SearchCouponList data={this.props.couponList}
                              onClickPushPage={this.props.onPushPage}
                              onSearch={(value)=> {
                                  this.props.onSearch(value)
                              }}
                              navigator ={this.props.navigator}
            />
        )
    }
}

const mapStateToProps = (state)=>({
    couponList: state.couponList
}
)

const mapDispatchToProps = (dispatch)=>({
    onSearch: (param)=> {
        if (param.replace(/\s/g, "") !== "") {
            dispatch(queryCouponsRequest(param))
        }
    },
    onPushPage: (token,id, navigator)=> {
        dispatch(getCouponDetailsRequest({token,id, navigator,
            routeData: {
                comp: ViewCouponsDetail,
                props: {key: "ViewCouponsDetail"}
            }
        }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCoupons)
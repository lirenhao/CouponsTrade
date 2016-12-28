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
import {queryCouponsRequest} from '../action'
import {connect} from 'react-redux'


class SearchCoupons extends React.Component {
    render() {
        return (
            <SearchCouponList data={this.props.couponList}
                              onClickPushPage={() =>this.props.onPushPage(this.props.navigator)}
                              onSearch={(value)=> {
                                  this.props.onSearch(value)
                              }}/>
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
    onPushPage: (navigator)=>navigator.pushPage({
        comp: ViewCouponsDetail, props: {key: "ViewCouponsDetail"}
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCoupons)
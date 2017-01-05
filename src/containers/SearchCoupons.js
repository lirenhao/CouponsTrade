/**
 * Author：pengfei
 * Create Date：2016/12/14
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */


import React from 'react'
import CouponList from '../components/sellCoupon/CouponList'
import PushRefresh from '../components/PushRefresh'
import ViewCouponsDetail from '../containers/ViewCouponsDetail'
import {queryCouponsRequest, getCouponDetailsRequest, refreshCouponListRequest} from '../actions'
import {connect} from 'react-redux'


class SearchCoupons extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <input type="search" placeholder="商品名称" className="search-input"
                           onBlur={(e)=>this.props.onSearch(e.target.value) }/>
                </section>
                <CouponList couponList={this.props.couponList} navigator={this.props.navigator} token={this.props.token}
                            onClickPushPage={this.props.onPushPage}/>
                <PushRefresh hasMore={this.props.couponList.length < this.props.page.total}
                             onRefresh={()=>this.props.onRefresh(this.props.token, this.props.query, this.props.page)}/>
            </div>
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
    onRefresh: (token, query, page)=> {
        dispatch(refreshCouponListRequest({token, query, page}))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCoupons)
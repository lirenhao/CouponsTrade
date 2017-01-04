/**
 * Author：pengfei
 * Create Date：2016/12/13
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 查询商品组建
 */


import React from 'react'
import {reduxForm} from 'redux-form'
import SellingCouponList from './SellingCouponList'
import PushRefresh from '../PushRefresh'

const SearchCouponList = (props)=> {
    const {onSearch, onClickPushPage, couponList, navigator, token, page,onRefresh} = props;
    return (
        <div>
            <section>
                <input type="search" placeholder="商品名称" className="search-input"
                       onBlur={(e)=>onSearch(e.target.value) }/>
            </section>
            <SellingCouponList couponList={couponList} navigator={navigator} token={token} onClickPushPage={onClickPushPage}/>
            <PushRefresh hasMore={couponList.length < page.total} onRefresh={onRefresh}/>
        </div>
    )
}

SearchCouponList.propTypes = {
    onSearch: React.PropTypes.func.isRequired,
    couponList: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            id: React.PropTypes.string.isRequired,
            couponName: React.PropTypes.string.isRequired,
            sellingPrice: React.PropTypes.number.isRequired,
            description: React.PropTypes.string.isRequired
        })).isRequired,
    onClickPushPage: React.PropTypes.func.isRequired,
    navigator: React.PropTypes.object.isRequired,
    token: React.PropTypes.string.isRequired,
    page: React.PropTypes.shape({
        total: React.PropTypes.number.isRequired,
        number: React.PropTypes.number.isRequired,
        size: React.PropTypes.number.isRequired
    }).isRequired,
    onRefresh: React.PropTypes.func.isRequired
};

export default reduxForm({
    form: "SearchCouponList"
})(SearchCouponList)


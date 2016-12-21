/**
 * Author：pengfei
 * Create Date：2016/12/21
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 对查询不是自己发布的优惠券明细信息操作的reducer
 */


import {insertCouponDetails} from '../action'
import {createReducer} from 'redux-act'


export default createReducer({
    [insertCouponDetails]: (state, couponInfo)=> {
        return {state, ...couponInfo}
    }
}, {})
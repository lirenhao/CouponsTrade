/**
 * Author：pengfei
 * Create Date：2016/12/21
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 对查询自己发布的优惠券明细信息操作的reducer
 */
import {createReducer} from 'redux-act'
import {getUserCouponInfoSuccess} from '../../actions'

export default createReducer({
    [getUserCouponInfoSuccess]: (state, payload)=> ({...payload.couponInfo})
}, {})
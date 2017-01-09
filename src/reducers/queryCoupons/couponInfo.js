/**
 * Author：pengfei
 * Create Date：2016/12/21
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 对查询不是自己发布的优惠券明细信息操作的reducer
 */
import {createReducer} from 'redux-act'
import {getCouponsInfoSuccess} from '../../actions/index'

export default createReducer({
    [getCouponsInfoSuccess]: (state, payload) => ({...payload.couponInfo})
}, {})
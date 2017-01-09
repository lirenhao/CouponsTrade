/**
 * Author：pengfei
 * Create Date：2017/1/4
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {createReducer} from 'redux-act'
import {getUserCouponListSuccess} from '../../actions/index'

export default createReducer({
    [getUserCouponListSuccess]: (state, payload) => ({...state, ...payload.page})
}, {total: 0, number: 0, size: 8})
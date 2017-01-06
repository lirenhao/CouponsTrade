/**
 * Author：Yky
 * Create Date：2016/12/21
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {createReducer} from 'redux-act'
import {getOrderInfoSuccess, openCouponSuccess} from '../../actions'

export default createReducer({
    [getOrderInfoSuccess]: (state, payload) => payload.orderInfo,
    [openCouponSuccess]: (state, payload) => ({...state, isOpen: true, couponCode: payload.couponCode})
}, {})
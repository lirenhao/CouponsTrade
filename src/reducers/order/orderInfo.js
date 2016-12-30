/**
 * Author：Yky
 * Create Date：2016/12/21
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {createReducer} from 'redux-act'
import {setOrderInfo, openCoupon} from '../../actions'

export default createReducer({
    [setOrderInfo]: (state, payload) => payload,
    [openCoupon]: (state, payload) => {
        return {...state, isOpen: true, couponCode: payload}
    }
}, {})
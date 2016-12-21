/**
 * Author：yky
 * Create Date：2016/12/21
 * Modified By：yky
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {createReducer} from 'redux-act'
import {setOrderInfo, openCoupon} from '../action'

export default createReducer({
    [setOrderInfo]: (state, payload) => payload,
    [openCoupon]: state => {
        return {...state, isOpen: true}
    }
}, {})
/**
 * Author：Yky
 * Create Date：2016/12/22
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {createReducer} from 'redux-act'
import {getOrderListSuccess} from '../../actions'

export default createReducer({
    [getOrderListSuccess]: (state, payload) => ({...state, ...payload.page})
}, {total: 0, number: 0, size: 8})
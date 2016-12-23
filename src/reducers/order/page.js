/**
 * Author：Yky
 * Create Date：2016/12/22
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {createReducer} from 'redux-act'
import {initialPage, setOrderPage} from '../../action'

export default createReducer({
    [initialPage]: (state, payload) => {
        return {...state, ...payload}
    },
    [setOrderPage]: (state, payload) => {
        return {...state, number: payload}
    }
}, {total: 0, number: 0, size: 5})
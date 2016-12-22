/**
 * Author：Yky
 * Create Date：2016/12/22
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {createReducer} from 'redux-act'
import {initialPage, setPage} from '../../action'

export default createReducer({
    [initialPage]: (state, payload) => payload,
    [setPage]: (state, payload) => {
        return {...state, number: payload}
    }
}, {})
/**
 * Author：Yky
 * Create Date：2016/12/21
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {createReducer} from 'redux-act'
import {setOrderList, insertOrderList} from '../../actions'

export default createReducer({
    [setOrderList]: (state, payload) => payload,
    [insertOrderList]: (state, payload) => [...state, ...payload]
}, [])
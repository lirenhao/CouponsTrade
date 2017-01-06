/**
 * Author：Yky
 * Create Date：2016/12/21
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {createReducer} from 'redux-act'
import {getOrderListSuccess} from '../../actions'

export default createReducer({
    [getOrderListSuccess]: (state, payload) => {
        if(payload.page.number > 1)
            return [...state, ...payload.orderList]
        else
            return [...payload.orderList]
    }
}, [])
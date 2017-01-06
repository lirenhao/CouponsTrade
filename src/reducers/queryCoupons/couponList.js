/**
 * Author：pengfei
 * Create Date：2016/12/21
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {createReducer} from 'redux-act'
import {getCouponsListSuccess} from '../../actions'

export default createReducer({
    [getCouponsListSuccess]: (state, payload) => {
        if(payload.page.number > 1)
            return [...state, ...payload.couponList]
        else
            return [...payload.couponList]
    }
}, [])
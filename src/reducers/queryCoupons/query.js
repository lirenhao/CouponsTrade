/**
 * Author：pengfei
 * Create Date：2017/1/3
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {createReducer} from 'redux-act'
import {getCouponsListRequest} from '../../actions/index'

export default createReducer(
    {
        [getCouponsListRequest]: (state, payload) => {
            return {...state, couponName: payload.param.couponName != "" ? payload.param.couponName : "ALL"}
        }
    }, {couponName: "ALL"}
)
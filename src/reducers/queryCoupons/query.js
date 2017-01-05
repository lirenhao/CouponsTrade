/**
 * Author：pengfei
 * Create Date：2017/1/3
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */


import {createReducer} from 'redux-act'
import {setCouponsQuery} from '../../actions/index'

export default createReducer(
    {
        [setCouponsQuery]: (state, payload)=> {
            return {...state, ...payload}
        }
    }, {couponName: "ALL"}
)
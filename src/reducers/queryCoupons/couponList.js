/**
 * Author：pengfei
 * Create Date：2016/12/21
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */


import {setCoupons, insertCoupons} from '../../actions/index'
import {createReducer} from 'redux-act'


export default createReducer({
    [setCoupons]: (state, couponList)=> couponList,
    [insertCoupons]: (state, couponList)=> {
        return [...state, ...couponList]
    }
}, [])
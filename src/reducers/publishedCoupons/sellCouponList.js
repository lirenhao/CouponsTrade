/**
 * Author：pengfei
 * Create Date：2016/12/21
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */

import {setUserCoupons, insertUserCoupons} from '../../actions'
import {createReducer} from 'redux-act'


export default createReducer({
    [setUserCoupons]: (state, couponList)=> couponList,
    [insertUserCoupons]: (state, couponList)=> {
        return [...state, ...couponList]
    }
}, [])

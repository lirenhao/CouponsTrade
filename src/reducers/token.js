/**
 * Author：liRenhao
 * Create Date：2016/12/19
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {createReducer} from "redux-act"
import {loginSuccess, logoutSuccess} from "../actions"

export default createReducer({
    [loginSuccess]: (state, payload) => payload.token + "",
    [logoutSuccess]: (state) => ""
}, "")
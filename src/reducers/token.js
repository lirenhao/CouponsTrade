/**
 * Author：liRenhao
 * Create Date：2016/12/19
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {createReducer} from "redux-act"
import {login, logout} from "../actions"

export default createReducer({
    [login]: (state, token) => token,
    [logout]: (state) => ""
}, "")
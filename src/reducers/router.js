/**
 * Author：liRenhao
 * Create Date：2016/12/22
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {createReducer} from "redux-act"
import {initialRouter} from "../action"

export default createReducer({
    [initialRouter]: (state, navigator) => navigator
}, {})
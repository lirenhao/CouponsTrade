/**
 * Author：liRenhao
 * Create Date：2016/12/21
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {createReducer} from "redux-act"
import {showDialog, hideDialog} from "../action"

export default createReducer({
    [showDialog]: (state, msg) => {
        return {msg, show: true}
    },
    [hideDialog]: (state) => {
        return {...state, show: false}
    }
}, {show: false, msg: ""})
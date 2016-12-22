/**
 * Author：liRenhao
 * Create Date：2016/12/22
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {createReducer} from "redux-act"
import {initialRouter, popRouter, pushRouter, resetRouter} from "../action"

export default createReducer({
    [initialRouter]: (state, navigator) => navigator,
    [popRouter]: (state) => {
        state.popPage()
        return {...state}
    },
    [pushRouter]: (state, payload) => {
        state.pushPage({comp: payload.comp})
        return {...state}
    },
    [resetRouter]: (state, comp) => {
        state.resetPage({comp})
        return {...state}
    }
}, {})
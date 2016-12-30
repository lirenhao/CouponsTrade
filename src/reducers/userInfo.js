/**
 * Author：liRenhao
 * Create Date：2016/12/20
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {createReducer} from "redux-act"
import {updateUserInfo} from "../actions"

export default createReducer({
    [updateUserInfo]: (state, userInfo) => {
        return {...state, ...userInfo}
    }
}, {})
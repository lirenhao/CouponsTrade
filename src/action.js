/**
 * Author：liRenhao
 * Create Date：2016/12/19
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 用于描述界面中操作state中数据变化的action
 */
import {createAction} from "redux-act"

// 注册的请求action
export const signUpRequest = createAction("SIGN_UP_REQUEST")

// 登录的请求action
export const loginRequest = createAction("LOGIN_REQUEST")
// 更新Token的action
export const updateToken = createAction("UPDATE_TOKEN")

// 用户信息的请求action
export const userInfoRequest = createAction("USER_INFO_REQUEST")
// 更新用户信息的action
export const updateUserInfo = createAction("UPDATE_USER_INFO")
// 更新用户信息的请求action
export const updateUserInfoRequest = createAction("UPDATE_USER_INFO_REQUEST")

// 生成邀请码的请求action
export const createInviteCodeRequest = createAction("CREATE_INVITE_CODE_REQUEST")
// 更新邀请码的action
export const updateInviteCode = createAction("UPDATE_INVITE_CODE")

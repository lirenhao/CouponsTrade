/**
 * Author：liRenhao
 * Create Date：2016/12/19
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 用于描述界面中操作state中数据变化的action
 */
import {createAction} from "redux-act"

// 开始等待action
export const onload = createAction("ONLOAD")
// 取消等待action
export const unload = createAction("UNLOAD")

// 注册的请求action
export const signUpRequest = createAction("SIGN_UP_REQUEST")

// 登录的请求action
export const loginRequest = createAction("LOGIN_REQUEST")
// 注销请求的action
export const logoutRequest = createAction("LOGOUT_REQUEST")
// 登录的action
export const login = createAction("LOGIN")
// 注销的action
export const logout = createAction("LOGOUT")

// 用户信息的请求action
export const getUserInfoRequest = createAction("GET_USER_INFO_REQUEST")
// 更新用户信息的请求action
export const updateUserInfoRequest = createAction("UPDATE_USER_INFO_REQUEST")
// 更新用户信息的action
export const updateUserInfo = createAction("UPDATE_USER_INFO")

// 生成邀请码的请求action
export const createInviteCodeRequest = createAction("CREATE_INVITE_CODE_REQUEST")
// 更新邀请码的action
export const updateInviteCode = createAction("UPDATE_INVITE_CODE")

// 验证密码的请求action
export const verifyPasswordRequest = createAction("VERIFY_PASSWORD_REQUEST")
// 更改密码的请求action
export const updatePasswordRequest = createAction("UPDATE_PASSWORD_REQUEST")

// 发布优惠券action
export const publishCoupon = createAction("PUBLISH_COUPON")

// 搜索优惠券action
export const searchCoupons = createAction("SEARCH_COUPONS")

// 更新优惠券列表
export const updateCoupons = createAction("UPDATE_COUPONS")

// 插入优惠卷列表
export const insertCoupons = createAction("INSERT_COUPONS")

// 查看优惠券明细action
export const getCouponDetails = createAction("GET_COUPON_DETAILS")

//查看用户已发布过的优惠券列表
export const getUserCoupons = createAction("GET_USER_COUPONS")

// 更新用户优惠券列表
export const updateUserCoupons = createAction("UPDATE_USER_COUPONS")

// 插入用户优惠卷列表
export const insertUserCoupons = createAction("INSERT_USER_COUPONS")

// 下架优惠券
export const stopUserCoupon = createAction("STOP_USER_COUPON")

//编辑优惠券
export const editUserCoupon = createAction("EDIT_USER_COUPON")

//更新编辑优惠券信息
export const updateUserCoupon = createAction("UPDATE_USER_COUPON")

//支付订单
export const pay = createAction("PAY")

//取消订单
export const cancelOrder = createAction("CANCEL_ORDER")

//查看订单列表
export const getOrderList = createAction("GET_ORDER_LIST")

//查看订单详情
export const getOrderInfo = createAction("GET_ORDER_INFO")

//开启优惠券
export const openCoupon = createAction("OPEN_COUPON")




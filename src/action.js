/**
 * Author：liRenhao
 * Create Date：2016/12/19
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 用于描述界面中操作state中数据变化的action
 */
import {createAction} from "redux-act"

// 开始等待action
export const onload = createAction("ONLOAD");
// 取消等待action
export const unload = createAction("UNLOAD");

// 显示消息框的action
export const showDialog = createAction("SHOW_DIALOG");
// 隐藏消息框的action
export const hideDialog = createAction("HIDE_DIALOG");

// 注册的请求action
export const signUpRequest = createAction("SIGN_UP_REQUEST");

// 登录的请求action
export const loginRequest = createAction("LOGIN_REQUEST");
// 退出当前用户请求的action
export const logoutRequest = createAction("LOGOUT_REQUEST");
// 登录的action
export const login = createAction("LOGIN");
// 退出当前用户的action
export const logout = createAction("LOGOUT");

// 获取用户信息的请求action
export const getUserInfoRequest = createAction("GET_USER_INFO_REQUEST");
// 更新用户信息的请求action
export const updateUserInfoRequest = createAction("UPDATE_USER_INFO_REQUEST");
// 更新用户信息的action
export const updateUserInfo = createAction("UPDATE_USER_INFO");

// 生成邀请码的请求action
export const createInviteCodeRequest = createAction("CREATE_INVITE_CODE_REQUEST");
// 更新邀请码的action
export const updateInviteCode = createAction("UPDATE_INVITE_CODE");

// 验证密码的请求action
export const verifyPasswordRequest = createAction("VERIFY_PASSWORD_REQUEST");
// 更改密码的请求action
export const updatePasswordRequest = createAction("UPDATE_PASSWORD_REQUEST");

// 发布优惠券请求action
export const publishCouponRequest = createAction("PUBLISH_COUPON_REQUEST");

// 查询优惠券请求action
export const queryCouponsRequest = createAction("QUERY_COUPONS_REQUEST");

// 更新优惠券列表的分页信息action
export const setCouponPage = createAction("SET_COUPON_PAGE");

// 更新优惠券列表action
export const setCoupons = createAction("SET_COUPONS");

// 插入优惠卷列表action
export const insertCoupons = createAction("INSERT_COUPONS");

// 查看优惠券明细请求action
export const getCouponDetailsRequest = createAction("GET_COUPON_DETAILS_REQUEST");

// 更新优惠券明细action
export const insertCouponDetails = createAction("INSERT_COUPON_DETAILS");

//查看用户已发布过的优惠券列表请求action
export const getUserCouponsRequest = createAction("GET_USER_COUPONS_REQUEST");

// 更新用户已发布过优惠券列表的分页信息action
export const setUserCouponPage = createAction("SET_USER_COUPON_PAGE");

// 更新用户优惠券列表action
export const setUserCoupons = createAction("SET_USER_COUPONS");

// 插入用户优惠卷列表action
export const insertUserCoupons = createAction("INSERT_USER_COUPONS");

// 更新用户发布的优惠券明细action
export const insertUserCouponDetails = createAction("INSERT_USER_COUPON_DETAILS");

// 下架优惠券请求action
export const soldOutCouponRequest = createAction("SOLD_OUT_COUPON_REQUEST");

// 更新下架优惠券状态action
export const updateSoldOutCoupon = createAction("UPDATE_SOLD_OUT_COUPON");

//编辑优惠券请求action
export const editUserCouponRequest = createAction("EDIT_USER_COUPON_REQUEST");

//更新编辑优惠券信息action
export const updateUserCoupon = createAction("UPDATE_USER_COUPON");

//支付订单请求action
export const payRequest = createAction("PAY_REQUEST");

//取消订单请求action
export const cancelOrderRequest = createAction("CANCEL_ORDER_REQUEST");

//查看订单列表请求action
export const getOrderListRequest = createAction("GET_ORDER_LIST_REQUEST");

//更新订单列表请求
export const insertOrderListRequest = createAction("INSERT_ORDER_LIST_REQUEST");

//初始化分页信息（订单列表）action
export const initialPage = createAction("INITIAL_PAGE");

//更新分页信息（订单列表）action
export const setOrderPage = createAction("SET_ORDER_PAGE");

//更新订单列表action
export const setOrderList = createAction("SET_ORDER_LIST");

//插入订单列表action
export const insertOrderList = createAction("INSERT_ORDER_LIST");

//查看订单详情请求action
export const getOrderInfoRequest = createAction("GET_ORDER_INFO_REQUEST");

//更新订单详情action
export const setOrderInfo = createAction("SET_ORDER_INFO");

//开启优惠券请求action
export const openCouponRequest = createAction("OPEN_COUPON_REQUEST");

//更新优惠券开启信息action
export const openCoupon = createAction("OPEN_COUPON");

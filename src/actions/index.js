import {createAction} from 'redux-act'
import * as Const from './constants'

export const onload = createAction(Const.ONLOAD)

export const unload = createAction(Const.UNLOAD)

export const showDialog = createAction(Const.SHOW_DIALOG)

export const hideDialog = createAction(Const.HIDE_DIALOG)

export const signUpRequest = createAction(Const.SIGN_UP_REQUEST)
export const signUpSuccess = createAction(Const.SIGN_UP_SUCCESS)

export const loginRequest = createAction(Const.LOGIN_REQUEST)
export const loginSuccess = createAction(Const.LOGIN_SUCCESS)

export const logoutRequest = createAction(Const.LOGOUT_REQUEST)
export const logoutSuccess = createAction(Const.LOGOUT_SUCCESS)

export const getUserInfoRequest = createAction(Const.GET_USER_INFO_REQUEST)
export const getUserInfoSuccess = createAction(Const.GET_USER_INFO_SUCCESS)

export const updateUserInfoRequest = createAction(Const.UPDATE_USER_INFO_REQUEST)
export const updateUserInfoSuccess = createAction(Const.UPDATE_USER_INFO_SUCCESS)

export const createInviteCodeRequest = createAction(Const.CREATE_INVITE_CODE_REQUEST)
export const createInviteCodeSuccess = createAction(Const.CREATE_INVITE_CODE_SUCCESS)

export const verifyPasswordRequest = createAction(Const.VERIFY_PASSWORD_REQUEST)
export const verifyPasswordSuccess = createAction(Const.VERIFY_PASSWORD_SUCCESS)

export const updatePasswordRequest = createAction(Const.UPDATE_PASSWORD_REQUEST)
export const updatePasswordSuccess = createAction(Const.UPDATE_PASSWORD_SUCCESS)

export const getCouponsListRequest = createAction(Const.GET_COUPONS_LIST_REQUEST)
export const getCouponsListSuccess = createAction(Const.GET_COUPONS_LIST_SUCCESS)

export const getCouponsInfoRequest = createAction(Const.GET_COUPONS_INFO_REQUEST)
export const getCouponsInfoSuccess = createAction(Const.GET_COUPONS_INFO_SUCCESS)

export const publishCouponRequest = createAction(Const.PUBLISH_COUPON_REQUEST)
export const publishCouponSuccess = createAction(Const.PUBLISH_COUPON_SUCCESS)

export const getUserCouponListRequest = createAction(Const.GET_USER_COUPON_LIST_REQUEST)
export const getUserCouponListSuccess = createAction(Const.GET_USER_COUPON_LIST_SUCCESS)

export const getUserCouponInfoRequest = createAction(Const.GET_USER_COUPON_INFO_REQUEST)
export const getUserCouponInfoSuccess = createAction(Const.GET_USER_COUPON_INFO_SUCCESS)

export const updateUserCouponRequest = createAction(Const.UPDATE_USER_COUPON_REQUEST)
export const updateUserCouponSuccess = createAction(Const.UPDATE_USER_COUPON_SUCCESS)

export const soldOutCouponRequest = createAction(Const.SOLD_OUT_COUPON_REQUEST)
export const soldOutCouponSuccess = createAction(Const.SOLD_OUT_COUPON_SUCCESS)

export const createOrderRequest = createAction(Const.CREATE_ORDER_REQUEST)
export const createOrderSuccess = createAction(Const.CREATE_ORDER_SUCCESS)

export const payOrderRequest = createAction(Const.PAY_ORDER_REQUEST)
export const payOrderSuccess = createAction(Const.PAY_ORDER_SUCCESS)

export const cancelOrderRequest = createAction(Const.CANCEL_ORDER_REQUEST)
export const cancelOrderSuccess = createAction(Const.CANCEL_ORDER_SUCCESS)

export const receiptOrderRequest = createAction(Const.RECEIPT_ORDER_REQUEST)
export const receiptOrderSuccess = createAction(Const.RECEIPT_ORDER_SUCCESS)

export const getOrderListRequest = createAction(Const.GET_ORDER_LIST_REQUEST)
export const getOrderListSuccess = createAction(Const.GET_ORDER_LIST_SUCCESS)

export const getOrderInfoRequest = createAction(Const.GET_ORDER_INFO_REQUEST)
export const getOrderInfoSuccess = createAction(Const.GET_ORDER_INFO_SUCCESS)

export const openCouponRequest = createAction(Const.OPEN_COUPON_REQUEST)
export const openCouponSuccess = createAction(Const.OPEN_COUPON_SUCCESS)


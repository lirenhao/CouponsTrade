/**
 * Author：liRenhao
 * Create Date：2016/12/20
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {takeEvery} from 'redux-saga'
import * as Const from '../constants'
import * as Async from './async'

export function* watchSignUpRequest() {
    yield* takeEvery(Const.SIGN_UP_REQUEST, Async.signUpAsync)
}

export function* watchLoginRequest() {
    yield* takeEvery(Const.LOGIN_REQUEST, Async.loginAsync)
}

export function* watchLogoutRequest() {
    yield* takeEvery(Const.LOGOUT_REQUEST, Async.logoutAsync)
}

export function* watchGetUserInfoRequest() {
    yield* takeEvery(Const.GET_USER_INFO_REQUEST, Async.getUserInfoAsync)
}

export function* watchUpdateUserInfoRequest() {
    yield* takeEvery(Const.UPDATE_USER_INFO_REQUEST, Async.updateUserInfoAsync)
}

export function* watchCreateInviteCodeRequest() {
    yield* takeEvery(Const.CREATE_INVITE_CODE_REQUEST, Async.createInviteCodeAsync)
}

export function* watchVerifyPasswordRequest() {
    yield* takeEvery(Const.VERIFY_PASSWORD_REQUEST, Async.verifyPasswordAsync)
}

export function* watchUpdatePasswordRequest() {
    yield* takeEvery(Const.UPDATE_PASSWORD_REQUEST, Async.updatePasswordAsync)
}

export function* watchGetOrderListRequest() {
    yield takeEvery(Const.GET_ORDER_LIST_REQUEST, Async.fetchOrderList)
}

export function* watchInsetOrderListRequest() {
    yield takeEvery(Const.INSERT_ORDER_LIST_REQUEST, Async.fetchInsetOrderList)
}

export function* watchGetOrderInfoRequest() {
    yield takeEvery(Const.GET_ORDER_INFO_REQUEST, Async.fetchOrderInfo)
}

export function* watchPay() {
    yield takeEvery(Const.PAY_REQUEST, Async.fetchPay)
}

export function* watchOpenCoupon() {
    yield takeEvery(Const.OPEN_COUPON_REQUEST, Async.fetchOPenCoupon)
}

export function* watchPublishCouponRequest() {
    yield takeEvery(Const.PUBLISH_COUPON_REQUEST, Async.publishCouponAsync)
}

export function* watchGetCouponDetailsRequest() {
    yield takeEvery(Const.GET_COUPON_DETAILS_REQUEST, Async.getCouponDetailsAsync)
}

export function* watchQueryCouponsRequest() {
    yield takeEvery(Const.QUERY_COUPONS_REQUEST, Async.queryCouponsAsync)
}

export function* watchGetUserCouponsRequest() {
    yield takeEvery(Const.GET_USER_COUPONS_REQUEST, Async.getUserCouponsAsync)
}

export function* watchSoldOutCouponRequest() {
    yield takeEvery(Const.SOLD_OUT_COUPON_REQUEST, Async.soldOutCouponAsync)
}

export function* watchEditUserCouponRequest() {
    yield takeEvery(Const.EDIT_USER_COUPON_REQUEST, Async.editUserCouponAsync)
}

export function* watchCreateOrderRequest() {
    yield takeEvery(Const.CREATE_ORDER_REQUEST, Async.createOrderAsync)
}


export default function* sagas(getState) {
    yield [
        watchSignUpRequest(),
        watchLoginRequest(),
        watchLogoutRequest(),
        watchGetUserInfoRequest(),
        watchUpdateUserInfoRequest(),
        watchCreateInviteCodeRequest(),
        watchVerifyPasswordRequest(),
        watchUpdatePasswordRequest(),
        watchPublishCouponRequest(),
        watchGetOrderListRequest(),
        watchInsetOrderListRequest(),
        watchGetOrderInfoRequest(),
        watchPay(),
        watchOpenCoupon(),
        watchQueryCouponsRequest(),
        watchGetCouponDetailsRequest(),
        watchGetUserCouponsRequest(),
        watchSoldOutCouponRequest(),
        watchEditUserCouponRequest(),
        watchCreateOrderRequest(),
        Async.queryCouponsAsync({payload: "ALL"})
    ]
}
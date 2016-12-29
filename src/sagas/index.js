/**
 * Author：liRenhao
 * Create Date：2016/12/20
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {takeEvery} from 'redux-saga'
import {
    signUpRequest, loginRequest,
    logoutRequest, getUserInfoRequest,
    updateUserInfoRequest, createInviteCodeRequest,
    verifyPasswordRequest, updatePasswordRequest,
    queryCouponsRequest, getUserCouponsRequest,
    soldOutCouponRequest, editUserCouponRequest,
    getOrderListRequest, getOrderInfoRequest, payRequest,
    openCouponRequest, insertOrderListRequest,
    publishCouponRequest, getCouponDetailsRequest,createOrderRequest
} from '../action'
import {
    signUpAsync, loginAsync,
    logoutAsync, getUserInfoAsync,
    updateUserInfoAsync, createInviteCodeAsync,
    verifyPasswordAsync, updatePasswordAsync,
    fetchOrderList, fetchOrderInfo, fetchPay, fetchOPenCoupon, fetchInsetOrderList,
    publishCouponAsync, getCouponDetailsAsync, queryCouponsAsync,
    getUserCouponsAsync, soldOutCouponAsync, editUserCouponAsync,createOrderAsync
} from './async'

export function* watchSignUpRequest() {
    yield* takeEvery(signUpRequest.getType(), signUpAsync)
}

export function* watchLoginRequest() {
    yield* takeEvery(loginRequest.getType(), loginAsync)
}

export function* watchLogoutRequest() {
    yield* takeEvery(logoutRequest.getType(), logoutAsync)
}

export function* watchGetUserInfoRequest() {
    yield* takeEvery(getUserInfoRequest.getType(), getUserInfoAsync)
}

export function* watchUpdateUserInfoRequest() {
    yield* takeEvery(updateUserInfoRequest.getType(), updateUserInfoAsync)
}

export function* watchCreateInviteCodeRequest() {
    yield* takeEvery(createInviteCodeRequest.getType(), createInviteCodeAsync)
}

export function* watchVerifyPasswordRequest() {
    yield* takeEvery(verifyPasswordRequest.getType(), verifyPasswordAsync)
}

export function* watchUpdatePasswordRequest() {
    yield* takeEvery(updatePasswordRequest.getType(), updatePasswordAsync)
}

export function* watchGetOrderListRequest() {
    yield takeEvery(getOrderListRequest.getType(), fetchOrderList)
}

export function* watchInsetOrderListRequest() {
    yield takeEvery(insertOrderListRequest.getType(), fetchInsetOrderList)
}

export function* watchGetOrderInfoRequest() {
    yield takeEvery(getOrderInfoRequest.getType(), fetchOrderInfo)
}

export function* watchPay() {
    yield takeEvery(payRequest.getType(), fetchPay)
}

export function* watchOpenCoupon() {
    yield takeEvery(openCouponRequest.getType(), fetchOPenCoupon)
}

export function* watchPublishCouponRequest() {
    yield takeEvery(publishCouponRequest.getType(), publishCouponAsync)
}

export function* watchGetCouponDetailsRequest() {
    yield takeEvery(getCouponDetailsRequest.getType(), getCouponDetailsAsync)
}

export function* watchQueryCouponsRequest() {
    yield takeEvery(queryCouponsRequest.getType(), queryCouponsAsync)
}

export function* watchGetUserCouponsRequest() {
    yield takeEvery(getUserCouponsRequest.getType(), getUserCouponsAsync)
}

export function* watchSoldOutCouponRequest() {
    yield takeEvery(soldOutCouponRequest.getType(), soldOutCouponAsync)
}

export function* watchEditUserCouponRequest() {
    yield takeEvery(editUserCouponRequest.getType(), editUserCouponAsync)
}

export function* watchCreateOrderRequest() {
    yield takeEvery(createOrderRequest.getType(), createOrderAsync)
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
        queryCouponsAsync({payload: "ALL"})
    ]
}
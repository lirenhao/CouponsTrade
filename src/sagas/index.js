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
    getOrderListRequest, getOrderInfoRequest, payRequest, openCouponRequest,
    publishCouponRequest, getCouponDetailsRequest,
    queryCouponsRequest,getUserCouponsRequest,
    soldOutCouponRequest,editUserCouponRequest
} from '../action'
import {
    signUpAsync, loginAsync,
    logoutAsync, getUserInfoAsync,
    updateUserInfoAsync, createInviteCodeAsync,
    fetchOrderList, fetchOrderInfo, fetchPay, fetchOPenCoupon,
    publishCouponAsync, getCouponDetailsAsync, queryCouponsAsync,
    getUserCouponsAsync,soldOutCouponAsync,editUserCouponAsync
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

export function* watchGetOrderListRequest() {
    yield takeEvery(getOrderListRequest.getType(), fetchOrderList)
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


export default function* sagas(getState) {
    yield [
        watchSignUpRequest(),
        watchLoginRequest(),
        watchLogoutRequest(),
        watchGetUserInfoRequest(),
        watchUpdateUserInfoRequest(),
        watchCreateInviteCodeRequest(),
        watchPublishCouponRequest(),
        watchGetOrderListRequest(),
        watchGetOrderInfoRequest(),
        watchPay(),
        watchOpenCoupon(),
        watchQueryCouponsRequest(),
        watchGetCouponDetailsRequest(),
        watchGetUserCouponsRequest(),
        watchSoldOutCouponRequest(),
        watchEditUserCouponRequest()
    ]
}
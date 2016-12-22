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
    getOrderListRequest, getOrderInfoRequest, payRequest,
    publishCouponRequest, popRouter, pushRouter, resetRouter, getCouponDetailsRequest, queryCouponsRequest
} from '../action'
import {
    signUpAsync, loginAsync,
    logoutAsync, getUserInfoAsync,
    fetchOrderList, fetchOrderInfo, fetchPay,
    publishCouponAsync, getCouponDetailsAsync, queryCouponsAsync
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

export function* watchGetOrderListRequest() {
    yield takeEvery(getOrderListRequest.getType(), fetchOrderList)
}

export function* watchGetOrderInfoRequest() {
    yield takeEvery(getOrderInfoRequest.getType(), fetchOrderInfo)
}

export function* watchPay() {
    yield takeEvery(payRequest.getType(), fetchPay)
}

export function* watchPublishCouponRequest() {
    yield takeEvery(publishCouponRequest.getType(), publishCouponAsync)
}

export function* watchPopRouter(getState) {
    yield* takeEvery(popRouter.getType(), () => {
        getState().router.popPage()
    })
}

export function* watchPushRouter(getState) {
    yield* takeEvery(pushRouter.getType(), (action) => {
        getState().router.pushPage(action.payload)
    })
}

export function* watchResetRouter(getState) {
    yield* takeEvery(resetRouter.getType(), (action) => {
        getState().router.resetPage(action.payload)
    })
}

export function* watchGetCouponDetailsRequest() {
    yield takeEvery(getCouponDetailsRequest.getType(), getCouponDetailsAsync)
}

export function* watchQueryCouponsRequest() {
    yield takeEvery(queryCouponsRequest.getType(), queryCouponsAsync)
}


export default function* sagas(getState) {
    yield [
        watchSignUpRequest(),
        watchLoginRequest(),
        watchLogoutRequest(),
        watchGetUserInfoRequest(),
        watchPublishCouponRequest(),
        watchGetOrderListRequest(),
        watchGetOrderInfoRequest(),
        watchPay(),
        watchPopRouter(getState),
        watchPushRouter(getState),
        watchResetRouter(getState),
        watchQueryCouponsRequest(),
        watchGetCouponDetailsRequest()
    ]
}
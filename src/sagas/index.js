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
    getOrderListRequest, getOrderInfoRequest, payRequest, openCouponRequest,
    publishCouponRequest, popRouter, pushRouter, resetRouter, getCouponDetailsRequest,
    queryCouponsRequest,getUserCouponsRequest,
    soldOutCouponRequest,editUserCouponRequest
} from '../action'
import {
    signUpAsync, loginAsync,
    logoutAsync, getUserInfoAsync,
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
        watchPublishCouponRequest(),
        watchGetOrderListRequest(),
        watchGetOrderInfoRequest(),
        watchPay(),
        watchOpenCoupon(),
        watchPopRouter(getState),
        watchPushRouter(getState),
        watchResetRouter(getState),
        watchQueryCouponsRequest(),
        watchGetCouponDetailsRequest(),
        watchGetUserCouponsRequest(),
        watchSoldOutCouponRequest(),
        watchEditUserCouponRequest()
    ]
}
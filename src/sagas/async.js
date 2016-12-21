/**
 * Author：liRenhao
 * Create Date：2016/12/20
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {call, put} from 'redux-saga/effects'
import fetch from '../fetch'
import {ServerPath, ResponseCode} from '../constants'
import {onload, unload, login, logout, updateUserInfo, updateInviteCode, setOrderList} from '../action'

/**
 * 注册的异步处理
 * @param req 注册发起signUpRequest的action
 */
export function* signUpAsync(req) {
    yield put(onload())
    const res = yield call(fetch, ServerPath.SIGN_UP, req.payload)
    if (res.code == ResponseCode.SUCCESS)
        console.log(res)
    else
        console.log(res)
    yield put(unload())
}

/**
 * 登录的异步处理
 * @param req 登录发起loginRequest的action
 */
export function* loginAsync(req) {
    yield put(onload())
    const res = yield call(fetch, ServerPath.LOGIN, req.payload)
    if (res.code == ResponseCode.SUCCESS)
        yield put(login(res.token))
    else
        console.log(res)
    yield put(unload())
}

/**
 * 注销的异步处理
 */
export function* logoutAsync() {
    yield put(onload())
    yield call(fetch, ServerPath.LOGOUT)
    yield put(logout())
    yield put(unload())
}

/**
 * 获取用户信息的异步处理
 * @param req
 */
export function* getUserInfoAsync(req) {
    yield put(onload())
    const res = yield call(fetch, ServerPath.GET_USER_INFO, req.payload)
    yield put(updateUserInfo(res))
    yield put(unload())
}

/**
 * 更新用户信息的异步处理
 * @param req
 */
export function* updateUserInfoAsync(req) {
    yield put(onload())
    const res = yield call(fetch, ServerPath.UPDATE_USER_INFO, req.payload)
    yield put(updateUserInfo(res))
    yield put(unload())
}

/**
 *生成邀请码的异步处理
 */
export function* createInviteCodeAsync() {
    yield put(onload())
    const res = yield call(fetch, ServerPath.CREATE_INVITE_CODE)
    yield put(updateInviteCode(res.inviteCode))
    yield put(unload())
}

/**
 * 验证密码的异步处理
 * @param req
 */
export function* verifyPasswordAsync(req) {
    yield put(onload())
    const res = yield call(fetch, ServerPath.VERIFY_PASSWORD, req.payload)
    yield put(updateInviteCode(res.inviteCode))
    yield put(unload())
}

/**
 * 更改密码的异步处理
 * @param req
 */
export function* updatePasswordAsync(req) {
    yield put(onload())
    const res = yield call(fetch, ServerPath.UPDATE_PASSWORD, req.payload)

    yield put(unload())
}

/**
 * 获取订单列表的异步处理
 * @param action
 */

export function* fetchOrderList(action) {
    yield put(onload())
    const orderList = yield call(fetch, ServerPath.GET_ORDER_LIST, action.payload);
    yield put(setOrderList(orderList));
    yield put(unload())
}
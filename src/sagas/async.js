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
import {onload, unload, login, logout} from '../action'

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
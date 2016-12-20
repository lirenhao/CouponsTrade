/**
 * Author：liRenhao
 * Create Date：2016/12/20
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {takeEvery} from 'redux-saga'
import {call, put} from 'redux-saga/effects'
import {onload, unload, loginRequest, login, logoutRequest, logout} from '../action'
import fetch from '../fetch'

export function* loginAsync(req) {
    yield put(onload())
    const res = yield call(fetch, "login", req.payload)
    if (res.code == 'success')
        yield put(login(res.token))
    else
        console.log(res)
    yield put(unload())
}

export function* watchLoginRequest() {
    yield* takeEvery(loginRequest.getType(), loginAsync)
}

export function* logoutAsync() {
    yield put(onload())
    yield call(fetch, "logout")
    yield put(logout())
    yield put(unload())
}

export function* watchLogoutRequest() {
    yield* takeEvery(logoutRequest.getType(), logoutAsync)
}

export default function* sagas() {
    yield [
        watchLoginRequest(),
        watchLogoutRequest()
    ]
}
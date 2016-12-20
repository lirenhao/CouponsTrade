/**
 * Author：liRenhao
 * Create Date：2016/12/20
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {takeEvery} from 'redux-saga'
import {loginRequest, logoutRequest} from '../action'
import {loginAsync, logoutAsync} from './async'

export function* watchLoginRequest() {
    yield* takeEvery(loginRequest.getType(), loginAsync)
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
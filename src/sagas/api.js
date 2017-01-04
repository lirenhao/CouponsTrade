/**
 * Author：liRenhao
 * Create Date：2017/1/3
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {put, call, take} from 'redux-saga/effects'
import * as Act from '../actions'
import fetch from '../fetch'
import {ResponseCode} from "../constants"

export function* request() {
    while (true) {
        let req = yield take((action) => /.*REQUEST/.test(action.type))
        let {apiType, param, router, handle = {after: Act.onload, before: Act.unload}} = req.payload
        yield put(handle.after())
        try {
            let res = yield call(fetch, apiType, param)
            if (res.code == ResponseCode.SUCCESS) {
                yield put({type: req.type, payload: res})
                if (router) {
                    yield call(router)
                }
            } else
                yield put(Act.showDialog(res.msg))
        } catch (e) {
            yield put(Act.showDialog(e.message))
        }
        yield put(handle.before())
    }
}
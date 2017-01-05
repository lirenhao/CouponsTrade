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
import {ResponseCode} from '../constants'

export function* request() {
    while (true) {
        let action = yield take((action) => /.*REQUEST/.test(action.type))
        let {apiType, param, router, handle} = action.payload
        handle = {
            before: [Act.onload],
            success: [(res) => ({type: action.type, payload: res})],
            fail: [Act.showDialog],
            exception: [Act.showDialog],
            after: [Act.unload],
            ...handle
        }
        // 请求之前的处理
        for (let handleBefore of handle.before) {
            yield put(handleBefore())
        }
        try {
            let res = yield call(fetch, apiType, param)
            if (res.code == ResponseCode.SUCCESS) {
                // 成功后的处理
                for (let handleSuccess of handle.success) {
                    yield put(handleSuccess(res))
                }
                if (router) {
                    yield call(router)
                }
            } else {
                // 失败后的处理
                for (let handleFail of handle.fail) {
                    yield put(handleFail(res.msg))
                }
            }
        } catch (e) {
            // 异常的处理
            for (let handleException of handle.exception) {
                yield put(handleException(e.message))
            }
        }
        // 请求之后的处理
        for (let handleAfter of handle.after) {
            yield put(handleAfter())
        }
    }
}
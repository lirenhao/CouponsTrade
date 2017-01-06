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
        let {apiType, param, router, handle, callback} = action.payload
        handle = {
            before: [Act.onload],
            success: [(res) => ({type: action.type.replace(/REQUEST/, 'SUCCESS'), payload: res})],
            fail: [Act.showDialog],
            exception: [Act.showDialog],
            after: [Act.unload],
            ...handle
        }
        callback = {
            before: [],
            success: [],
            fail: [],
            exception: [],
            after: [],
            ...callback
        }
        // 请求之前的处理
        yield [callbackHandle(handle.before, callback.before)]
        try {
            let res = yield call(fetch, apiType, param)
            console.log(res)
            if (res.code == ResponseCode.SUCCESS) {
                // 成功后的处理
                yield [callbackHandle(handle.success, callback.success, res)]
                if (router) {
                    yield call(router, res)
                }
            } else {
                // 失败后的处理
                yield [callbackHandle(handle.fail, callback.fail, res.msg)]
            }
        } catch (e) {
            // 异常的处理
            yield [callbackHandle(handle.exception, callback.exception, e.message)]
        }
        // 请求之后的处理
        yield [callbackHandle(handle.after, callback.after)]
    }
}

function* callbackHandle(actCreates, funcs, payload) {
    for (let func of funcs) {
        yield call(func, payload)
    }
    for (let actCreate of actCreates) {
        yield put(actCreate(payload))
    }
}
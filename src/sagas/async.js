/**
 * Author：liRenhao
 * Create Date：2017/1/3
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {put, call, take} from 'redux-saga/effects'
import * as Act from '../actions'

export function* request(api) {
    while (true) {
        let action = yield take((action) => /.*REQUEST/.test(action.type))
        let {apiType, param, router, handle, callback} = action.payload
        handle = {
            before: [Act.onload],
            success: [(res) => ({type: action.type.replace(/REQUEST/, 'SUCCESS'), payload: res})],
            fail: [Act.showDialog],
            after: [Act.unload],
            ...handle
        }
        callback = {
            before: [],
            success: [],
            fail: [],
            after: [],
            ...callback
        }
        // 请求之前的处理
        yield call(callbackHandle, handle.before, callback.before)
        try {
            let res = yield call(api, apiType, param)
            // 成功后的处理
            yield call(callbackHandle, handle.success, callback.success, res)
            if (router) {
                yield call(router, res)
            }
        } catch (e) {
            // 异常的处理
            yield call(callbackHandle, handle.fail, callback.fail, e)
        }
        // 请求之后的处理
        yield call(callbackHandle, handle.after, callback.after)
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
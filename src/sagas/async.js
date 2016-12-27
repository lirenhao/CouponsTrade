/**
 * Author：liRenhao
 * Create Date：2016/12/20
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {call, put} from "redux-saga/effects";
import fetch from "../fetch";
import {ServerPath, ResponseCode} from "../constants";
import {
    onload,
    unload,
    login,
    logout,
    updateUserInfo,
    showDialog,
    setOrderList,
    setOrderInfo,
    insertOrderList,
    setOrderPage,
    openCoupon,
    initialPage,
    setCoupons,
    insertCouponDetails,
    setUserCoupons,
    insertUserCouponDetails,
    updateSoldOutCoupon,
    updateUserCoupon
} from "../action";

/**
 * 注册的异步处理
 * @param req 注册发起signUpRequest的action
 */
export function* signUpAsync(req) {
    yield put(onload());
    const {param, navigator} = req.payload;
    const res = yield call(fetch, ServerPath.SIGN_UP, param);
    if (res.code == ResponseCode.SUCCESS) {
        yield put(showDialog("注册成功"));
        navigator.popPage()
    } else {
        yield put(showDialog(res.msg))
    }
    yield put(unload())
}

/**
 * 登录的异步处理
 * @param req 登录发起loginRequest的action
 */
export function* loginAsync(req) {
    yield put(onload());
    const {param, navigator, router} = req.payload;
    const res = yield call(fetch, ServerPath.LOGIN, param);
    if (res.code == ResponseCode.SUCCESS) {
        yield put(login(res.token));
        yield call([navigator, navigator.resetPage], router)
    } else {
        yield put(showDialog(res.msg))
    }
    yield put(unload())
}

/**
 * 注销的异步处理
 */
export function* logoutAsync() {
    yield put(onload());
    yield call(fetch, ServerPath.LOGOUT);
    yield put(logout());
    yield put(unload())
}

/**
 * 获取用户信息的异步处理
 * @param req
 */
export function* getUserInfoAsync(req) {
    yield put(onload());
    const {token, navigator, router} = req.payload;
    const res = yield call(fetch, ServerPath.GET_USER_INFO, {token});
    if (res.code == ResponseCode.SUCCESS) {
        yield put(updateUserInfo(res.userInfo));
        navigator.pushPage(router)
    } else {
        yield put(showDialog(res.msg))
    }
    yield put(unload())
}

/**
 * 更新用户信息的异步处理
 * @param req
 */
export function* updateUserInfoAsync(req) {
    yield put(onload());
    const {param, navigator} = req.payload;
    const res = yield call(fetch, ServerPath.UPDATE_USER_INFO, param)
    if (res.code == ResponseCode.SUCCESS) {
        yield put(updateUserInfo(param))
        navigator.popPage()
    } else {
        yield put(showDialog(res.msg))
    }
    yield put(unload())
}

/**
 *生成邀请码的异步处理
 */
export function* createInviteCodeAsync(req) {
    yield put(onload())
    const {token, navigator, comp} = req.payload;
    const res = yield call(fetch, ServerPath.CREATE_INVITE_CODE, {token})
    if (res.code == ResponseCode.SUCCESS) {
        navigator.pushPage({comp, props: {key: "userShare", inviteCode: res.inviteCode}})
    } else {
        yield put(showDialog(res.msg))
    }
    yield put(unload())
}

/**
 * 验证密码的异步处理
 * @param req
 */
export function* verifyPasswordAsync(req) {
    yield put(onload())
    const {param, navigator, comp, props} = req.payload
    const res = yield call(fetch, ServerPath.VERIFY_PASSWORD, param)
    if (res.code == ResponseCode.SUCCESS) {
        navigator.replacePage({comp, props})
    } else {
        yield put(showDialog(res.msg))
    }
    yield put(unload())
}

/**
 * 更改密码的异步处理
 * @param req
 */
export function* updatePasswordAsync(req) {
    yield put(onload())
    const {param, navigator} = req.payload
    const res = yield call(fetch, ServerPath.UPDATE_PASSWORD, param)
    if (res.code == ResponseCode.SUCCESS) {
        navigator.popPage()
    } else {
        yield put(showDialog(res.msg))
    }
    yield put(unload())
}

/**
 * 初始化列表的异步处理
 * @param action
 */

export function* fetchOrderList(action) {
    const {route, com, ...data}=action.payload;
    yield put(onload());
    const res = yield call(fetch, ServerPath.GET_ORDER_LIST, data);
    if (res.code == ResponseCode.SUCCESS) {
        yield put(initialPage(res.page));
        yield put(setOrderList(res.orderList));
        if (data.from === "order") {
            route.resetPageStack([
                {
                    comp: com.Tabs, props: {key: "tabs" + Math.random(), newIndex: 2}
                },
                {
                    comp: com.OrderList, props: {key: "OrderList"}
                },
            ])
        } else {
            route.pushPage({
                comp: com, props: {key: "OrderList"}
            })
        }
    } else {
        yield put(showDialog(res.msg));
    }
    yield put(unload())
}

/**
 * 更新订单列表的异步处理
 * @param action
 */

export function* fetchInsetOrderList(action) {
    const {...data}=action.payload;
    yield put(onload());
    const res = yield call(fetch, ServerPath.INSET_ORDER_LIST, data);
    if (res.code == ResponseCode.SUCCESS) {
        yield put(setOrderPage(res.page.number));
        yield put(insertOrderList(res.orderList));
    } else {
        yield put(showDialog(res.msg));
    }
    yield put(unload())
}

/**
 * 获取订单详情的异步处理
 * @param action
 */

export function* fetchOrderInfo(action) {
    yield put(onload());
    const {route, com, ...data}=action.payload;
    const res = yield call(fetch, ServerPath.GET_ORDER_INFO, data);
    if (res.code == ResponseCode.SUCCESS) {
        yield put(setOrderInfo(res.orderInfo));
        route.pushPage({
            comp: com,
            props: {key: "orderInfo"}
        })
    } else {
        yield put(showDialog(res.msg))
    }
    yield put(unload())
}

/**
 * 支付的异步处理
 * @param action
 */

export function* fetchPay(action) {
    const {route, com, ...data}=action.payload;
    yield put(onload());
    const res = yield call(fetch, ServerPath.PAY, data);
    if (res.code == ResponseCode.SUCCESS) {
        yield route.replacePage({
            comp: com, props: {key: "OrderResultSuccess", res: 1}
        })
    } else {
        yield route.pushPage({
            comp: com, props: {key: "OrderResult", res: 0}
        })
    }
    yield put(unload())
}

/**
 * 打开优惠券的异步处理
 * @param action
 */

export function* fetchOPenCoupon(action) {
    yield put(onload());
    const res = yield call(fetch, ServerPath.OPEN_COUPON, action.payload);
    if (res.code == ResponseCode.SUCCESS) {
        yield put(openCoupon(res.couponCode))
    } else {
        yield put(showDialog(res.msg));
    }
    yield put(unload())
}


/**
 * 搜索优惠券请求
 * @param req
 */
export function *queryCouponsAsync(req) {
    yield put(onload());
    const res = yield call(fetch, ServerPath.QUERY_COUPONS, req.payload);
    if (res.code == ResponseCode.SUCCESS) {
        yield put(setCoupons(res.couponList))
    } else {
        yield put(showDialog(res.msg))
    }
    yield put(unload())
}

/**
 * 发布优惠券请求
 * @param req
 */
export function *publishCouponAsync(req) {
    yield put(onload());
    const {param,navigator,routeData} = req.payload;
    const res = yield call(fetch, ServerPath.PUBLISH_COUPON, param);
    yield put(showDialog(res.msg));
    if(res.code == ResponseCode.SUCCESS) {
        if(navigator.pages.length>1){
            navigator.popPage()
        }else{
            navigator.replacePage(
                routeData
            )
        }
    }
    yield put(unload())
}

/**
 * 请求优惠券详细信息
 * @param req
 */
export function *getCouponDetailsAsync(req) {
    yield put(onload());
    const res = yield call(fetch, ServerPath.QUERY_COUPONS, req.payload);
    if (res.code == ResponseCode.SUCCESS) {
        if (res.flag === "1") {
            yield put(insertUserCouponDetails(res.couponInfo))
        } else {
            yield put(insertCouponDetails(res.couponInfo))
        }
    } else {
        yield put(showDialog(res.msg))
    }
    yield put(unload())
}

/**
 * 获取用户自己发布的优惠券信息请求
 * @param req
 */
export function *getUserCouponsAsync(req) {
    yield put(onload());
    const res = yield call(fetch, ServerPath.GET_USER_COUPONS, req.payload);
    if (res.code == ResponseCode.SUCCESS) {
        yield put(setUserCoupons(res.couponList))
    } else {
        yield put(showDialog(res.msg))
    }
    yield put(unload())
}

/**
 * 用户下架优惠券请求
 * @param req
 */
export function *soldOutCouponAsync(req) {
    yield put(onload());
    const res = yield call(fetch, ServerPath.SOLD_OUT_COUPON, req.payload);
    if (res.code == ResponseCode.SUCCESS) {
        yield put(updateSoldOutCoupon(res.couponState))
    } else {
        yield put(showDialog(res.msg))
    }
    yield put(unload())
}

/**
 * 用户编辑优惠券请求
 * @param req
 */
export function *editUserCouponAsync(req) {
    yield put(onload());
    const res = yield call(fetch, ServerPath.EDIT_USER_COUPON, req.payload);
    if (res.code == ResponseCode.SUCCESS) {
        yield put(updateUserCoupon(res.couponState))
    } else {
        yield put(showDialog(res.msg))
    }
    yield put(unload())
}
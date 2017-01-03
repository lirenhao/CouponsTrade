/**
 * Author：liRenhao
 * Create Date：2017/1/3
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */

// 服务器地址
export const ServerPath = {
    LOGIN: 'login',
    LOGOUT: 'logout',
    SIGN_UP: 'signUp',
    GET_USER_INFO: 'getUserInfo',
    UPDATE_USER_INFO: 'updateUserInfo',
    CREATE_INVITE_CODE: 'createInviteCode',
    VERIFY_PASSWORD: 'verifyPassword',
    UPDATE_PASSWORD: 'updatePassword',
    PUBLISH_COUPON: 'publishCoupon',
    GET_COUPON_DETAILS: 'getCouponDetails',
    GET_USER_COUPONS: 'getUserCoupons',
    EDIT_USER_COUPON: 'editUserCoupon',
    CREATE_ORDER: 'createOrder',
    GET_ORDER_LIST: 'getOrderList',
    INSET_ORDER_LIST: 'insertOrderList',
    GET_ORDER_INFO: 'getOrderInfo',
    PAY: 'pay',
    OPEN_COUPON: 'openCoupon',
    CANCEL_ORDER: 'cancelOrder',
    QUERY_COUPONS: 'queryCoupons',
    SOLD_OUT_COUPON: 'soldOutCoupon',
    REFRESH_COUPON_LIST:'refreshCouponList',
    REFRESH_USER_COUPON_LIST:'refreshUserCouponList'
}

// 响应码
export const ResponseCode = {
    SUCCESS: 'success',
    FAIL: 'fail',
    TIMEOUT: 'timeout'
}

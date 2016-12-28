/**
 * Author：liRenhao
 * Create Date：2016/12/20
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 模拟后台服务
 */
import express from 'express'
import bodyParser from 'body-parser'
import {ServerPath, ResponseCode} from './src/constants'

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.get("origin"));
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

let state = {
    token: "1234567890",
    login: {
        username: "1",
        password: "1"
    },
    userInfo: {
        nickname: "test",
        phoneNo: "18310809129",
        inviteCode: "InviteCodeA",
        inviteCount: 2
    },
    inviteCode: "InviteCodeB",
    order: {
        orderList: [{
            id: "100100001",
            couponName: "黑松白鹿五折券",
            describe: "298自助餐二人同行一人免单",
            sellingPrice: "400",
            picture: "",
        }, {
            id: "100100002",
            couponName: "必胜客100元代金券",
            describe: "",
            sellingPrice: "50",
            picture: ""
        }, {
            id: "100100003",
            couponName: "星巴克五折券",
            describe: "最高价值58元套餐一份",
            sellingPrice: "35",
            picture: ""
        }, {
            id: "100100004",
            couponName: "必胜客100元代金券",
            describe: "",
            sellingPrice: "50",
            picture: ""
        }, {
            id: "100100005",
            couponName: "呷哺呷哺100元代金券",
            describe: "",
            sellingPrice: "50",
            picture: ""
        }, {
            id: "100100006",
            couponName: "黑松白鹿五折券",
            describe: "298自助餐二人同行一人免单",
            sellingPrice: "400",
            picture: ""
        }, {
            id: "100100007",
            couponName: "必胜客100元代金券",
            describe: "",
            sellingPrice: "50",
            picture: ""
        }, {
            id: "100100008",
            couponName: "星巴克五折券",
            describe: "最高价值58元套餐一份",
            sellingPrice: "35",
            picture: ""
        }, {
            id: "100100009",
            couponName: "必胜客100元代金券",
            describe: "",
            sellingPrice: "50",
            picture: ""
        }, {
            id: "100100010",
            couponName: "呷哺呷哺100元代金券",
            describe: "",
            sellingPrice: "50",
            picture: ""
        }, {
            id: "100100011",
            couponName: "最后一条",
            describe: "",
            sellingPrice: "50",
            picture: ""
        }],
        orderInfo: {
            "100100001": {
                orderNo: "100100001",
                orderDate: "2016-12-22",
                orderTime: "08:07",
                id: "1",
                couponName: "呷哺呷哺100元代金券",
                isAutomaticRefund: true,
                couponType: "火锅",
                couponModality: "文本",
                couponCode: "1234567",
                sellingPrice: "50",
                originalPrice: "50",
                ticketPrice: "100",
                endDate: "2016-12-31",
                picture: "",
                describe: "无",
                isOpen: false,
                sellerNickName: "李四",
                orderState: "待支付"
            }, "100100002": {
                orderNo: "100100002",
                orderDate: "2016-12-22",
                orderTime: "08:07",
                id: "1",
                couponName: "呷哺呷哺100元代金券",
                isAutomaticRefund: true,
                couponType: "火锅",
                couponModality: "文本",
                couponCode: "1234567",
                sellingPrice: "50",
                originalPrice: "50",
                ticketPrice: "100",
                endDate: "2016-12-31",
                picture: "",
                describe: "无",
                isOpen: false,
                sellerNickName: "李四",
                orderState: "待支付"
            }, "100100003": {
                orderNo: "100100003",
                orderDate: "2016-12-22",
                orderTime: "08:07",
                id: "1",
                couponName: "呷哺呷哺100元代金券",
                isAutomaticRefund: true,
                couponType: "火锅",
                couponModality: "文本",
                couponCode: "1234567",
                sellingPrice: "50",
                originalPrice: "50",
                ticketPrice: "100",
                endDate: "2016-12-31",
                picture: "",
                describe: "无",
                isOpen: false,
                sellerNickName: "李四",
                orderState: "待支付"
            }, "100100004": {
                orderNo: "100100004",
                orderDate: "2016-12-22",
                orderTime: "08:07",
                id: "1",
                couponName: "呷哺呷哺100元代金券",
                isAutomaticRefund: true,
                couponType: "火锅",
                couponModality: "文本",
                couponCode: "1234567",
                sellingPrice: "50",
                originalPrice: "50",
                ticketPrice: "100",
                endDate: "2016-12-31",
                picture: "",
                describe: "无",
                isOpen: false,
                sellerNickName: "李四",
                orderState: "待支付"
            }, "100100005": {
                orderNo: "100100005",
                orderDate: "2016-12-22",
                orderTime: "08:07",
                id: "1",
                couponName: "呷哺呷哺100元代金券",
                isAutomaticRefund: true,
                couponType: "火锅",
                couponModality: "文本",
                couponCode: "1234567",
                sellingPrice: "50",
                originalPrice: "50",
                ticketPrice: "100",
                endDate: "2016-12-31",
                picture: "",
                describe: "无",
                isOpen: false,
                sellerNickName: "李四",
                orderState: "已支付"
            }, "100100006": {
                orderNo: "100100006",
                orderDate: "2016-12-22",
                orderTime: "08:07",
                id: "1",
                couponName: "呷哺呷哺100元代金券",
                isAutomaticRefund: true,
                couponType: "火锅",
                couponModality: "文本",
                couponCode: "1234567",
                sellingPrice: "50",
                originalPrice: "50",
                ticketPrice: "100",
                endDate: "2016-12-31",
                picture: "",
                describe: "无",
                isOpen: false,
                sellerNickName: "李四",
                orderState: "已支付"
            }, "100100007": {
                orderNo: "100100007",
                orderDate: "2016-12-22",
                orderTime: "08:07",
                id: "1",
                couponName: "呷哺呷哺100元代金券",
                isAutomaticRefund: true,
                couponType: "火锅",
                couponModality: "文本",
                couponCode: "1234567",
                sellingPrice: "50",
                originalPrice: "50",
                ticketPrice: "100",
                endDate: "2016-12-31",
                picture: "",
                describe: "无",
                isOpen: false,
                sellerNickName: "李四",
                orderState: "已支付"
            }, "100100008": {
                orderNo: "100100008",
                orderDate: "2016-12-22",
                orderTime: "08:07",
                id: "1",
                couponName: "呷哺呷哺100元代金券",
                isAutomaticRefund: true,
                couponType: "火锅",
                couponModality: "文本",
                couponCode: "1234567",
                sellingPrice: "50",
                originalPrice: "50",
                ticketPrice: "100",
                endDate: "2016-12-31",
                picture: "",
                describe: "无",
                isOpen: false,
                sellerNickName: "李四",
                orderState: "已支付"
            }, "100100009": {
                orderNo: "100100009",
                orderDate: "2016-12-22",
                orderTime: "08:07",
                id: "1",
                couponName: "呷哺呷哺100元代金券",
                isAutomaticRefund: true,
                couponType: "火锅",
                couponModality: "文本",
                couponCode: "1234567",
                sellingPrice: "50",
                originalPrice: "50",
                ticketPrice: "100",
                endDate: "2016-12-31",
                picture: "",
                describe: "无",
                isOpen: false,
                sellerNickName: "李四",
                orderState: "已完成"
            }, "100100010": {
                orderNo: "100100010",
                orderDate: "2016-12-22",
                orderTime: "08:07",
                id: "1",
                couponName: "呷哺呷哺100元代金券",
                isAutomaticRefund: true,
                couponType: "火锅",
                couponModality: "文本",
                couponCode: "1234567",
                sellingPrice: "50",
                originalPrice: "50",
                ticketPrice: "100",
                endDate: "2016-12-31",
                picture: "",
                describe: "无",
                isOpen: false,
                sellerNickName: "李四",
                orderState: "已完成"
            },
            "100100011": {
                orderNo: "100100011",
                orderDate: "2016-12-22",
                orderTime: "08:07",
                id: "1",
                couponName: "最后一条",
                isAutomaticRefund: true,
                couponType: "火锅",
                couponModality: "文本",
                couponCode: "1234567",
                sellingPrice: "50",
                originalPrice: "50",
                ticketPrice: "100",
                endDate: "2016-12-31",
                picture: "",
                describe: "无",
                isOpen: false,
                sellerNickName: "李四",
                orderState: "已完成"
            },
        },
    },
    publishCouponList: [
        {
            id: "1",
            couponName: "星巴克",
            isAutomaticRefund: "true",
            couponType: "1",
            couponModality: "1",
            couponCode: "123456",
            sellingPrice: 30,
            originalPrice: 20,
            ticketPrice: 50,
            endDate: "2016-12-31",
            describe: "所有地区通用券",
            userName: "1",
            couponState: "1"
        },
        {
            id: "2",
            couponName: "星巴克",
            isAutomaticRefund: "true",
            couponType: "1",
            couponModality: "1",
            couponCode: "1234567",
            sellingPrice: 30,
            originalPrice: 20,
            ticketPrice: 50,
            endDate: "2016-12-31",
            describe: "所有地区通用券",
            userName: "1",
            couponState: "1"
        }
    ]
};


app.post(`/${ServerPath.SIGN_UP}`, function (req, res) {
    const {inviteCode} = req.body;
    if (state.inviteCode == inviteCode)
        res.json({code: ResponseCode.SUCCESS});
    else
        res.json({code: ResponseCode.FAIL, msg: "邀请码错误"})
});

app.post(`/${ServerPath.LOGIN}`, function (req, res) {
    const {username, password} = req.body;
    if (state.login.username == username && state.login.password == password)
        res.json({code: ResponseCode.SUCCESS, token: state.token});
    else
        res.json({code: ResponseCode.FAIL, msg: "账号或密码错误"})
});

app.post(`/${ServerPath.LOGOUT}`, function (req, res) {
    res.json({code: ResponseCode.SUCCESS})
});

app.post(`/${ServerPath.GET_USER_INFO}`, function (req, res) {
    const {token} = req.body;
    if (state.token == token)
        res.json({code: ResponseCode.SUCCESS, userInfo: state.userInfo});
    else
        res.json({code: ResponseCode.FAIL, msg: "用户未登录"})
});

app.post(`/${ServerPath.UPDATE_USER_INFO}`, function (req, res) {
    const {token, ...userInfo} = req.body;
    if (state.token == token) {
        state.userInfo = userInfo;
        res.json({code: ResponseCode.SUCCESS})
    } else
        res.json({code: ResponseCode.FAIL, msg: "用户未登录"})
});

app.post(`/${ServerPath.CREATE_INVITE_CODE}`, function (req, res) {
    const {token} = req.body;
    if (state.token == token) {
        res.json({code: ResponseCode.SUCCESS, inviteCode: state.inviteCode})
    } else
        res.json({code: ResponseCode.FAIL, msg: "用户未登录"})
});

app.post(`/${ServerPath.VERIFY_PASSWORD}`, function (req, res) {
    const {token, oldPassword} = req.body;
    if (state.token == token) {
        if (state.login.password == oldPassword)
            res.json({code: ResponseCode.SUCCESS});
        else
            res.json({code: ResponseCode.FAIL, msg: "密码错误"})
    } else
        res.json({code: ResponseCode.FAIL, msg: "用户未登录"})
});

app.post(`/${ServerPath.UPDATE_PASSWORD}`, function (req, res) {
    const {token, newPassword} = req.body;
    if (state.token == token) {
        state.login.password = newPassword;
        res.json({code: ResponseCode.SUCCESS})
    } else
        res.json({code: ResponseCode.FAIL, msg: "用户未登录"})
});

app.post(`/${ServerPath.GET_ORDER_LIST}`, (req, res) => {
    console.log("收到获取订单列表请求");
    const {token, size}=req.body;
    const total = state.order.orderList.length;
    let result = [];
    for (let i = 0; i < size; i++) {
        let orderList = state.order.orderList[i];
        let orderInfo = state.order.orderInfo[orderList.id];
        result.push({
            ...orderList,
            orderState: orderInfo.orderState
        })
    }
    if (state.token == token) {
        res.json({
            code: ResponseCode.SUCCESS,
            orderList: result,
            page: {total: total, number: 1,}
        })
    } else
        res.json({code: ResponseCode.FAIL, msg: "订单列表获取失败"})
});

app.post(`/${ServerPath.INSET_ORDER_LIST}`, (req, res) => {
    console.log("收到更新订单列表请求");
    const {token, number, size}=req.body;
    const total = state.order.orderList.length;
    let result = [];
    let newNumber = 1;
    if (number * size < total) {
        newNumber = number * 1 + 1
    } else {
        newNumber = number * 1
    }
    let max = newNumber * size;
    max = max <= total ? max : total;
    for (let i = number * size; i < max; i++) {
        let orderList = state.order.orderList[i];
        let orderInfo = state.order.orderInfo[orderList.id];
        result.push({
            ...orderList,
            orderState: orderInfo.orderState
        })
    }
    if (state.token == token) {
        res.json({
            code: ResponseCode.SUCCESS,
            orderList: result,
            page: {
                total: total,
                number: newNumber
            }
        })
    } else
        res.json({code: ResponseCode.FAIL, msg: "更新列表失败"})
});

app.post(`/${ServerPath.GET_ORDER_INFO}`, (req, res) => {
    console.log("收到获取订单详情请求");
    const {token, id}=req.body;
    if (state.token == token) {
        const result = state.order.orderInfo[id];
        res.json({
            code: ResponseCode.SUCCESS,
            orderInfo: {
                ...result,
                couponCode: result.isOpen ? result.couponCode : "******"
            }
        })
    } else
        res.json({code: ResponseCode.FAIL, msg: "订单详情获取失败"})
});

app.post(`/${ServerPath.PAY}`, (req, res) => {
    console.log("收到支付请求");
    const {token, payment, content} = req.body;
    if (state.token == token && payment === "支付宝") {
        res.json({code: ResponseCode.SUCCESS})
    } else
        res.json({code: ResponseCode.FAIL, msg: "支付失败"})
});

app.post(`/${ServerPath.OPEN_COUPON}`, (req, res) => {
    console.log("收到打开优惠券请求");
    const {token, id} = req.body;
    if (state.token == token) {
        state.order.orderInfo[id].isOpen = true;
        res.json({
            code: ResponseCode.SUCCESS, isOpen: true,
            couponCode: state.order.orderInfo[id].couponCode
        })
    } else
        res.json({code: ResponseCode.FAIL, msg: "请求失败"})
});


app.post(`/${ServerPath.PUBLISH_COUPON}`, function (req, res) {
    const {token, couponName, isAutomaticRefund, couponType, couponModality, couponCode, sellingPrice, originalPrice, ticketPrice, endDate, describe} = req.body;
    const isHave = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].couponCode === couponCode) {
                return true;
            }
        }
        return false
    };
    if (state.token == token) {
        if (isHave(state.publishCouponList)) {
            res.json({code: ResponseCode.FAIL, msg: "该优惠券码已发布过"})
        } else {
            const len = state.publishCouponList.length;
            const userName = state.login.username;
            state.publishCouponList.push({
                id: len,
                couponName,
                isAutomaticRefund,
                couponType,
                couponModality,
                couponCode,
                sellingPrice,
                originalPrice,
                ticketPrice,
                endDate,
                describe,
                userName,
                couponState: "1"
            });
            res.json({code: ResponseCode.SUCCESS, msg: "发布成功"})
        }
    } else
        res.json({code: ResponseCode.FAIL, msg: "用户未登录"})
});


app.post(`/${ServerPath.QUERY_COUPONS}`, function (req, res) {
    const {couponName} = req.body;
    const getCouponList = (arr)=>{
        let couponList =[]
        let i =0
        for(var coupon of arr){
            if(couponName==="ALL"&&i<10){
                couponList.push({id:coupon.id,couponName:coupon.couponName,sellingPrice:coupon.sellingPrice,description:coupon.describe})
                i++
            }else{
                if(coupon.couponName.match(couponName.replace(/\s/g,""))){
                    couponList.push({id:coupon.id,couponName:coupon.couponName,sellingPrice:coupon.sellingPrice,description:coupon.describe})
                }
            }
        }
        return couponList
    }
    res.json({code: ResponseCode.SUCCESS, couponList: getCouponList(state.publishCouponList)})
});

app.post(`/${ServerPath.GET_COUPON_DETAILS}`, function (req, res) {
    const {id, username} = req.body;
    const couponList = state.publishCouponList.filter((r) => {
        return r.id === id
    });
    if (couponList.length !== 0) {
        const couponInfo = couponList[0];
        if (couponInfo.username === username) {
            res.json({code: ResponseCode.SUCCESS, flag: "1", couponInfo: couponInfo})
        } else {
            res.json({code: ResponseCode.SUCCESS, flag: "0", couponInfo: couponInfo})
        }
    }
    res.json({code: ResponseCode.FAIL, msg: "未查到该优惠券信息"})
});

app.post(`/${ServerPath.GET_USER_COUPONS}`, function (req, res) {
    const {userName, couponName, couponState} = req.body;
    const couponList = state.publishCouponList.filter((r) => {
        return r.userName === userName && r.couponName.match(couponName)
    });
    if (!couponState && typeof(couponState) != "undefined") {
        const newCouponList = couponList.filter((r) => {
            return r.couponState === couponState
        });
        res.json({code: ResponseCode.SUCCESS, couponList: newCouponList})
    }
    res.json({code: ResponseCode.SUCCESS, couponList: couponList})
});

app.post(`/${ServerPath.SOLD_OUT_COUPON}`, function (req, res) {
    const {id, token} = req.body;
    if (state.token == token) {
        state.publishCouponList.map((r) => {
            r.id === id ? r.couponState = "2" : r.couponState
        });
        res.json({code: ResponseCode.SUCCESS, couponState: "2"})
    } else {
        res.json({code: ResponseCode.FAIL, msg: "用户不具有下架权限，请重新登录"})
    }
});

app.post(`/${ServerPath.EDIT_USER_COUPON}`, function (req, res) {
    const {id, token, couponName, isAutomaticRefund, couponType, couponCode, couponModality, sellingPrice, originalPrice, ticketPrice, endDate, describe} = req.body;
    if (state.token == token) {
        const couponInfo = {
            id,
            couponName,
            isAutomaticRefund,
            couponType,
            couponModality,
            couponCode,
            sellingPrice,
            originalPrice,
            ticketPrice,
            endDate,
            describe,
            userName: state.login.username,
            couponState: "1"
        };
        const publishCouponList = state.publishCouponList.map((r) => {
            return r.id === id ? r = couponInfo : r
        });
        state = [...state, publishCouponList];
        res.json({code: ResponseCode.SUCCESS, couponState: "2"})
    } else {
        res.json({code: ResponseCode.FAIL, msg: "用户不能编辑，请重新登录"})
    }
});

// TODO 添加后台服务

app.listen(3000, function () {
    console.log('server start!')
});
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

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.get("origin"));
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

const state = {
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
        page: {
            total: "",
            number: "",
            size: ""
        },
        orderList: [{
            id: "100100001",
            couponName: "黑松白鹿五折券",
            describe: "298自助餐二人同行一人免单",
            sellingPrice: "400",
            picture: ""
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
            couponName: "呷哺呷哺100元代金券",
            describe: "",
            sellingPrice: "50",
            picture: ""
        }],
        orderInfo: {
            "100100011": {
                orderNo: "100100011",
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
                sellerNickName: "李四"
            }
        },
    }
}

app.post(`/${ServerPath.SIGN_UP}`, function (req, res) {
    const {inviteCode} = req.body
    if (state.inviteCode == inviteCode)
        res.json({code: ResponseCode.SUCCESS})
    else
        res.json({code: ResponseCode.FAIL, msg: "邀请码错误"})
})

app.post(`/${ServerPath.LOGIN}`, function (req, res) {
    const {username, password} = req.body
    if (state.login.username == username && state.login.password == password)
        res.json({code: ResponseCode.SUCCESS, token: state.token})
    else
        res.json({code: ResponseCode.FAIL, msg: "账号或密码错误"})
})

app.post(`/${ServerPath.LOGOUT}`, function (req, res) {
    res.json({code: ResponseCode.SUCCESS})
})

app.post(`/${ServerPath.GET_USER_INFO}`, function (req, res) {
    const {token} = req.body
    if (state.token == token)
        res.json({code: ResponseCode.SUCCESS, userInfo: state.userInfo})
    else
        res.json({code: ResponseCode.FAIL, msg: "用户未登录"})
})

app.post(`/${ServerPath.UPDATE_USER_INFO}`, function (req, res) {
    const {token, ...userInfo} = req.body
    if (state.token == token) {
        state.userInfo = userInfo
        res.json({code: ResponseCode.SUCCESS})
    } else
        res.json({code: ResponseCode.FAIL, msg: "用户未登录"})
})

app.post(`/${ServerPath.CREATE_INVITE_CODE}`, function (req, res) {
    const {token} = req.body
    if (state.token == token) {
        res.json({code: ResponseCode.SUCCESS, inviteCode: state.inviteCode})
    } else
        res.json({code: ResponseCode.FAIL, msg: "用户未登录"})
})

app.post(`/${ServerPath.VERIFY_PASSWORD}`, function (req, res) {
    const {token, oldPassword} = req.body
    if (state.token == token) {
        if (state.login.password == oldPassword)
            res.json({code: ResponseCode.SUCCESS})
        else
            res.json({code: ResponseCode.FAIL, msg: "密码错误"})
    } else
        res.json({code: ResponseCode.FAIL, msg: "用户未登录"})
})

app.post(`/${ServerPath.UPDATE_PASSWORD}`, function (req, res) {
    const {token, newPassword} = req.body
    if (state.token == token) {
        state.login.password = newPassword
        res.json({code: ResponseCode.SUCCESS})
    } else
        res.json({code: ResponseCode.FAIL, msg: "用户未登录"})
})

app.post(`/${ServerPath.GET_ORDER_LIST}`, (req, res) => {
    console.log("收到获取订单列表请求");
    const {token}=req.body;
    if (state.token == token) {
        res.json({code: ResponseCode.SUCCESS, orderList: state.order.orderList})
    } else
        res.json({code: ResponseCode.FAIL, msg: "订单列表获取失败"})
});

app.post(`/${ServerPath.GET_ORDER_INFO}`, (req, res) => {
    console.log("收到获取订单详情请求");
    const {token, id}=req.body;
    if (state.token == token) {
        res.json({code: ResponseCode.SUCCESS, orderInfo: state.order.orderInfo[id]})
    } else
        res.json({code: ResponseCode.FAIL, msg: "订单详情获取失败"})
});

// TODO 添加后台服务

app.listen(3000, function () {
    console.log('server start!')
})
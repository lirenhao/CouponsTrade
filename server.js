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
let orderNoIndex = 0;
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
    orderList: [],
    orderInfo: {
      "100100001": {
        orderNo: "100100001",
        orderDate: "2016-12-22",
        orderTime: "08:07",
        id: "1",
        couponName: "1",
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
        couponName: "2",
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
        couponName: "3",
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
        couponName: "4",
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
        couponName: "5",
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
        couponName: "6",
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
        couponName: "7",
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
        couponName: "8",
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
        couponName: "9",
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
        couponName: "10",
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
        couponName: "11",
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
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "123456",
      sellingPrice: 30,
      originalPrice: 20,
      ticketPrice: 50,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "0"
    },
    {
      id: "2",
      couponName: "瞎谱",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234567",
      sellingPrice: 30,
      originalPrice: 20,
      ticketPrice: 50,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "2",
      couponState: "1"
    },
    {
      id: "3",
      couponName: "黑松白鹿",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "2",
      couponState: "1"
    },
    {
      id: "4",
      couponName: "黑松白鹿2",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "5",
      couponName: "黑松白鹿3",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "6",
      couponName: "黑松白鹿4",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "7",
      couponName: "黑松白鹿5",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "8",
      couponName: "黑松白鹿6",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "9",
      couponName: "黑松白鹿7",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "10",
      couponName: "黑松白鹿8",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "11",
      couponName: "黑松白鹿9",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "12",
      couponName: "黑松白鹿10",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "13",
      couponName: "黑松白鹿11",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "14",
      couponName: "星巴克14",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "15",
      couponName: "星巴克15",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "16",
      couponName: "星巴克16",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "17",
      couponName: "星巴克17",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "18",
      couponName: "星巴克18",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "19",
      couponName: "星巴克19",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "20",
      couponName: "星巴克20",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "21",
      couponName: "星巴克21",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "22",
      couponName: "星巴克22",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "23",
      couponName: "星巴克23",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
      userName: "1",
      couponState: "1"
    },
    {
      id: "24",
      couponName: "星巴克24",
      isAutomaticRefund: true,
      couponType: "1",
      couponModality: "1",
      couponCode: "1234568",
      sellingPrice: 200,
      originalPrice: 150,
      ticketPrice: 300,
      endDate: "2016-12-31",
      describe: "仅限周三使用，属于全国通用券，如需开具发票请到具体门店进行询问。",
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
  console.log("登录")
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
  console.log("收到获取订单列表请求")
  const orderInfo = state.order.orderInfo
  const list = Object.keys(orderInfo)
  state.order.orderList = list.map(i => {
    return {
      id: orderInfo[i].orderNo,
      couponName: orderInfo[i].couponName,
      describe: orderInfo[i].describe,
      sellingPrice: orderInfo[i].sellingPrice,
      picture: orderInfo[i].picture,
      orderState: orderInfo[i].orderState
    }
  })
  let {token, size}=req.body
  const total = state.order.orderList.length
  size = size < total ? size : total
  if (state.token == token) {
    const result = state.order.orderList.slice(0, size)
    res.json({
      code: ResponseCode.SUCCESS,
      orderList: result,
      page: {total: total, number: 1,}
    })
  } else
    res.json({code: ResponseCode.FAIL, msg: "订单列表获取失败"})
})

app.post(`/${ServerPath.INSET_ORDER_LIST}`, (req, res) => {
  console.log("收到更新订单列表请求")
  const {token, number, size}=req.body
  const total = state.order.orderList.length
  let newNumber = 1
  if (number * size < total) {
    newNumber = number * 1 + 1
  } else {
    newNumber = number * 1
  }
  let max = newNumber * size
  max = max <= total ? max : total
  if (state.token == token) {
    const result = state.order.orderList.slice(number * size, max)
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
})

app.post(`/${ServerPath.GET_ORDER_INFO}`, (req, res) => {
  console.log("收到获取订单详情请求")
  const {token, id}=req.body
  if (state.token == token) {
    const result = state.order.orderInfo[id]
    res.json({
      code: ResponseCode.SUCCESS,
      orderInfo: {
        ...result,
        couponCode: result.isOpen ? result.couponCode : "******"
      }
    })
  } else
    res.json({code: ResponseCode.FAIL, msg: "订单详情获取失败"})
})

app.post(`/${ServerPath.PAY}`, (req, res) => {
  console.log("收到支付请求")
  const {token, payment, content, orderNo} = req.body
  if (state.token == token && payment === "支付宝") {
    state.order.orderInfo[orderNo].orderState = "已支付"
    res.json({code: ResponseCode.SUCCESS})
  } else
    res.json({code: ResponseCode.FAIL, msg: "支付失败"})
})

app.post(`/${ServerPath.OPEN_COUPON}`, (req, res) => {
  console.log("收到打开优惠券请求")
  const {token, id} = req.body
  if (state.token == token) {
    state.order.orderInfo[id].isOpen = true
    res.json({
      code: ResponseCode.SUCCESS, isOpen: true,
      couponCode: state.order.orderInfo[id].couponCode
    })
  } else
    res.json({code: ResponseCode.FAIL, msg: "请求失败"})
})

app.post(`/${ServerPath.CANCEL_ORDER}`, (req, res) => {
  console.log("收到取消订单请求")
  const {token, id} = req.body
  if (state.token == token) {
    state.order.orderInfo[id].orderState = "已取消"
    res.json({code: ResponseCode.SUCCESS, cancelId: id})
  } else
    res.json({code: ResponseCode.FAIL, msg: "请求失败"})
})

app.post(`/${ServerPath.RECEIPT_ORDER}`, (req, res) => {
  console.log("收到确认订单请求")
  const {token, id} = req.body
  if (state.token == token) {
    state.order.orderInfo[id].orderState = "已完成"
    const result = state.order.orderInfo[id]
    res.json({
      code: ResponseCode.SUCCESS,
      orderInfo: {
        ...result,
        couponCode: result.isOpen ? result.couponCode : "******"
      },
      receiptId: id
    })
  } else
    res.json({code: ResponseCode.FAIL, msg: "请求失败"})
})

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
      const len = state.publishCouponList.length + 1;
      const userName = state.login.username;
      state.publishCouponList.push({
        id: len.toString(),
        couponName,
        isAutomaticRefund: isAutomaticRefund === "true",
        couponType: typeof couponType === "undefined" ? "0" : couponType,
        couponModality: typeof couponModality === "undefined" ? "0" : couponModality,
        couponCode,
        sellingPrice: Number(sellingPrice),
        originalPrice: Number(originalPrice),
        ticketPrice: Number(ticketPrice),
        endDate,
        describe,
        userName,
        couponState: "1"
      })
      res.json({code: ResponseCode.SUCCESS, msg: "发布成功"})
    }
  } else
    res.json({code: ResponseCode.FAIL, msg: "用户未登录"})
})


app.post(`/${ServerPath.QUERY_COUPONS}`, function (req, res) {
    const {couponName, token, total, number, size} = req.body
    if (token === state.token) {
      let newNumber = couponName === "" ? 0 : number
      let newCouponName = couponName === "" ? "ALL" : couponName
      let newSize = Number(size)
      const couponListObj = getCouponList(state.publishCouponList, newCouponName, total, newNumber, newSize)
      res.json({
        code: ResponseCode.SUCCESS,
        couponList: couponListObj.couponList,
        page: {total: couponListObj.total, number: couponListObj.number, size: newSize}
      })
    } else {
      res.json({code: ResponseCode.FAIL, msg: "用户未登录"})
    }
  }
)

app.post(`/${ServerPath.REFRESH_COUPON_LIST}`, function (req, res) {
  const {token, total, number, size, couponName} = req.body
  if (token === state.token) {
    const couponListObj = getCouponList(state.publishCouponList, couponName, total, number, size)
    res.json({
      code: ResponseCode.SUCCESS,
      couponList: couponListObj.couponList,
      page: {total: couponListObj.total, number: couponListObj.number, size: Number(size)}
    })
  } else {
    res.json({code: ResponseCode.FAIL, msg: "用户未登录"})
  }
})

app.post(`/${ServerPath.GET_COUPON_DETAILS}`, function (req, res) {
  const {id, token} = req.body
  if (token === state.token) {
    const couponList = state.publishCouponList.filter((r) => {
      return r.id === id
    })
    if (couponList.length !== 0) {
      const couponInfo = {...couponList[0], nickname: state.userInfo.nickname}
      res.json({code: ResponseCode.SUCCESS, couponInfo: couponInfo})
    } else {
      res.json({code: ResponseCode.FAIL, msg: "未查到该优惠券信息"})
    }
  } else {
    res.json({code: ResponseCode.FAIL, msg: "用户没有登录，请重新登录"})
  }
})

app.post(`/${ServerPath.GET_USER_COUPONS}`, function (req, res) {
  const {token, couponName, couponState, total, number, size} = req.body
  const userName = state.login.username
  if (state.token === token) {
    const userCouponListObj = getUserCouponList(state.publishCouponList, userName, couponName, couponState, total, number, size)
    res.json({
      code: ResponseCode.SUCCESS,
      couponList: userCouponListObj.couponList,
      page: {total: userCouponListObj.total, number: userCouponListObj.number, size: Number(size)}
    })
  } else {
    res.json({code: ResponseCode.FAIL, msg: "用户没有登录，请重新登录"})
  }
})

app.post(`/${ServerPath.REFRESH_USER_COUPON_LIST}`, function (req, res) {
  const {token, couponName, couponState, total, number, size} = req.body
  const userName = state.login.username
  if (token === state.token) {
    const userCouponListObj = getUserCouponList(state.publishCouponList, userName, couponName, couponState, total, number, size)
    res.json({
      code: ResponseCode.SUCCESS,
      couponList: userCouponListObj.couponList,
      page: {total: userCouponListObj.total, number: userCouponListObj.number, size: Number(size)}
    })
  } else {
    res.json({code: ResponseCode.FAIL, msg: "用户未登录"})
  }
})

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
  const {token, id, couponName, isAutomaticRefund, couponType, couponModality, couponCode, sellingPrice, originalPrice, ticketPrice, endDate, describe, userName} = req.body
  if (state.token === token) {
    const couponInfo = {
      id,
      couponName,
      isAutomaticRefund: isAutomaticRefund === "true",
      couponType: typeof couponType === "undefined" ? "0" : couponType,
      couponModality: typeof couponModality === "undefined" ? "0" : couponModality,
      couponCode,
      sellingPrice: Number(sellingPrice),
      originalPrice: Number(originalPrice),
      ticketPrice: Number(ticketPrice),
      endDate,
      describe,
      userName,
      couponState: "1"
    };
    state.publishCouponList = state.publishCouponList.map((r) => {
      return r.id === id ? r = couponInfo : r
    });
    res.json({code: ResponseCode.SUCCESS, couponInfo: couponInfo})
  } else {
    res.json({code: ResponseCode.FAIL, msg: "用户不能编辑，请重新登录"})
  }
});

app.post(`/${ServerPath.CREATE_ORDER}`, function (req, res) {
  const {token, id} = req.body;
  const getNowDateFormatData = () => {
    var date = new Date();
    var separatorDate = "-";
    var separatorTime = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    return {
      date: date.getFullYear() + separatorDate + month + separatorDate + strDate,
      time: date.getHours() + separatorTime + date.getMinutes() + separatorTime + date.getSeconds(),
      orderNo: date.getFullYear().toString() + month + strDate + date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString() + orderNoIndex
    }
  }
  if (state.token == token) {
    const couponList = state.publishCouponList.filter((r) => {
      return r.id === id
    });
    orderNoIndex++
    const data = getNowDateFormatData()
    const orderInfoData = {
      ...couponList[0],
      orderNo: data.orderNo,
      orderDate: data.date,
      orderTime: data.time,
      isOpen: false,
      sellerNickName: state.userInfo.nickname,
      orderState: "待付款"
    }
    state.order.orderInfo[data.orderNo] = orderInfoData
    res.json({code: ResponseCode.SUCCESS, orderInfo: orderInfoData})
  } else {
    res.json({code: ResponseCode.FAIL, msg: "用户未登录"})
  }
});


// TODO 添加后台服务

app.listen(3000, function () {
  console.log('server start!')
});

/**
 * 生成优惠券Item对象
 * @param coupon 优惠券详细信息对象
 * @returns {{id: *, couponName: *, sellingPrice: *, description: *}}
 */
const getCouponListItem = (coupon) => {
  return {
    id: coupon.id,
    couponName: coupon.couponName,
    sellingPrice: coupon.sellingPrice,
    describe: coupon.describe
  }
}

/**
 * 获取查询优惠券列表相关数据
 * @param coupons 优惠券列表
 * @param couponName 查询条件（优惠券名称）
 * @param total 上次记录的总条数
 * @param number 上次记录的页数
 * @param size 每页条数
 * @returns {*}
 */
const getCouponList = (coupons, couponName, total, number, size) => {
  let couponList = []
  let newNumber = 0
  let publishedCoupons = coupons.filter((c) => {
    return c.couponState === "1"
  })
  if (couponName !== "ALL") {
    for (let coupon of publishedCoupons) {
      if (coupon.couponName.match(couponName.replace(/\s/g, ""))) {
        couponList.push(getCouponListItem(coupon))
      }
    }
    return getResult(couponList, total, number, size)
  } else {
    if (number > 0) {
      const newCoupons = publishedCoupons.slice(number * size, (Number(number) + 1) * size)
      couponList = newCoupons.map((m) => {
        return getCouponListItem(m)
      })
      newNumber = Number(number) + 1
    }
    else {
      const newCoupons = publishedCoupons.slice(0, size)
      couponList = newCoupons.map((m) => {
        return getCouponListItem(m)
      })
      newNumber = 1
    }
    return {total: publishedCoupons.length, number: newNumber, couponList: couponList}
  }
}

/**
 * 获取发布优的惠券列表相关数据
 * @param coupons 优惠券列表
 * @param userName 用户ID
 * @param couponName 查询条件（优惠券名称）
 * @param couponState 查询条件（优惠券状态）
 * @param total  上次记录的总条数
 * @param number 上次记录的页数
 * @param size 每页条数
 * @returns {{total, number, couponList}}
 */
const getUserCouponList = (coupons, userName, couponName, couponState, total, number, size) => {
  let couponList = []
  for (var coupon of coupons) {
    if (coupon.userName === userName) {
      couponList.push(getCouponListItem(coupon))
    }
  }
  if (!couponName && typeof(couponName) != "undefined") {
    var newNameCouponList = couponList.filter((r) => {
      return r.couponName.match(couponName)
    })
    if (!couponState && typeof(couponState) != "undefined") {
      const newStateCouponList = newNameCouponList.filter((r) => {
        return r.couponState === couponState
      })
      return getResult(newStateCouponList, total, number, size)
    } else {
      return getResult(newNameCouponList, total, number, size)
    }
  } else {
    return getResult(couponList, total, number, size)
  }
}

/**
 * 获取要得到一页优惠券列表相关数据
 * @param couponList 优惠券列表
 * @param total 上次记录得总条数
 * @param number 上次记录的页数
 * @param size 每页条数
 * @returns {{total: *, number: number, couponList: *}}
 */
const getResult = (couponList, total, number, size) => {
  let newNumber = 0
  let startNumber = 0
  let endNumber = 0
  if (Number(total) === couponList.length && number * size < couponList.length) {
    newNumber = Number(number) + 1
    startNumber = number * size
    endNumber = (Number(number) + 1) * size
  } else {
    newNumber = 1
    startNumber = 0
    endNumber = Number(size)
  }
  return {total: couponList.length, number: newNumber, couponList: couponList.slice(startNumber, endNumber)}
}
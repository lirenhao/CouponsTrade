/**
 * Author：liRenhao
 * Create Date：2016/12/20
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 模拟后台服务
 */
import express from 'express'
import bodyParser from 'body-parser'

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
    inviteCode: "InviteCodeB",
    userInfo: {
        nickname: "test",
        phoneNo: "18310809129",
        inviteCode: "InviteCodeA",
        inviteCount: 2
    }
}

app.post('/signUp', function (req, res) {
    const {inviteCode} = req.body
    if (state.inviteCode == inviteCode)
        res.json({code: "success"})
    else
        res.json({code: "field", msg: "邀请码错误"})
})

app.post('/login', function (req, res) {
    const {username, password} = req.body
    if (username == '1' && password == '1')
        res.json({code: "success", token: state.token})
    else
        res.json({code: "field", msg: "账号或密码错误"})
})

app.post('/logout', function (req, res) {
    res.json({code: "success"})
})

app.post('/getUserInfo', function (req, res) {
    const {token} = req.body
    if (state.token == token)
        res.json({code: "success", userInfo: state.userInfo})
    else
        res.json({code: "field", msg: "用户未登录"})
})

// TODO 添加后台服务

app.listen(3000, function () {
    console.log('server start!')
})
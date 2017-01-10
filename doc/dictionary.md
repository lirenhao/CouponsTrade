[TOC]:#
# Table of Contents
- [定义](#定义)
    - [用户名](#用户名)
    - [发布过的优惠券](#发布过的优惠券)
    - [开启](#开启)
    - [优惠券状态](#优惠券状态)
    - [邀请人数](#邀请人数)
    - [下架优惠券](#下架优惠券)
- [字典](#字典)
    - [1 登陆signIn、注册signUp](#1-登陆signin注册signup)
    - [2 优惠券：couponsTrade](#2-优惠券couponstrade)
    - [3 订单：order](#3-订单order)
    - [4 Action](#4-action)


## 定义

### 用户名
- 在本项目中用户名是指用户的手机号

### 发布过的优惠券
- 是指优惠券状态为未发布、发布、过期、已售（开启）、已售（未开启）的优惠券

### 开启
- 是指解密,在本项目中是指优惠券是否解密

### 优惠券状态
- 未发布：优惠券在进行编辑时，优惠券的状态会从发布变为未发布
- 发布：是指正在发布中的优惠券
- 过期：优惠券超过优惠券的截止日期
- 已售（开启）：优惠券已经售卖，并且已解密
- 已售（未开启）:优惠券已经售卖，并且未解密

### 邀请人数
- 是指邀请人已经邀请用户的个数


### 下架优惠券
- 是指将优惠券暂停或停止售卖

## 字典

注：该文档需要实时维护

### 1 登陆signIn、注册signUp
- **`用户名`：phoneNo**：将userName改为phoneNo
- 密码：password
- 昵称：nickName
- 手机号：phoneNo
- 验证码：validateCode
- 邀请码：inviteCode
- 邀请人数：inviteCount
- 原密码：oldPassword
- 新密码：newPassword
- 再次输入新密码：reNewPassword

### 2 优惠券：couponsTrade
- `发布过的优惠券`：publishedCoupons
- 查询优惠券：queryCoupons
- 优惠券列表：CouponList
- 优惠券详情：CouponInfo
- `下架优惠券`:soldOut
- 编辑优惠券：edit
- **优惠券唯一标识：id**
- 优惠券名称：couponName
- 优惠券码：couponCode
- 优惠券原价：originalPrice
- 优惠券售卖价：sellingPrice
- 优惠券券面价：ticketPrice
- 优惠券截止日期：endDate
- 优惠券是否支持自动退货：isAutomaticRefund
- 优惠券类别：couponType
  - 西餐 0-Western Food
  - 海鲜 1-seafood
  - 咖啡 2-coffee
  - 面包糕点 3-breadCakes
  - 火锅 4-hotPot
  - 烧烤 5-barbecue
  - 冰激凌 6-iceCream
  - 快餐 7-fastFood
  - 自助餐 8-buffet
  - 其他 9-other
- 券码形式：couponModality
  - 包括：图片或文本
- 优惠券描述：describe
  - 包括：可消费日期、可消费的时间等信息，商户的信息暂放在此
- 优惠券图片（与商户相关）：picture
- `优惠券是否开启`：isOpen
- 优惠券状态：couponState
  - `未发布`：0-unpublished
  - 发布:     1-published
  - 付款中:   2-paying
  - 过期:     3-overdue
  - 已售（未开启）:4-soldUnOpened
  - 已售（已开启）:5-soldOpened

### 3 订单：order
- 付款方式：paymentMethod
- 微信：weChat
- 支付宝：aliPay
- 订单编号：orderNo
- 订单支付日期：orderDate
- 订单支付时间：orderTime
- 卖家昵称：sellerNickName
- 买家昵称：buyerNickName
- 订单列表：orderList
- 订单详情：orderInfo
- 订单状态：orderState
  - 待支付:0-waitPay
  - 订单取消:1-cancel
  - 订单超时:2-overtime
  - 已支付:3-payComplete
  - 已确认:4-Confirmed
  - 已退货:5-backGoodsComplete
  - 已退款:6-moneyBackComplete
  - 申请退货:7-applicationBackGoods
  - 拒绝退货:8-rejectBackGoods
  - 仲裁开启:9-arbitrationOpen
  - 仲裁结束:10-arbitrationEnd

### 4 Action
- **开始等待：onLoad**
- **取消等待：unLoad**
- 显示消息框:showDialog
- 隐藏消息框:hideDialog
- 注册的请求:signUpRequest
- 登录的请求:loginRequest
- 登录:login
- 退出当前账户的请求:logoutRequest
- **退出当前账户：logout**
- 获取用户信息的请求：getUserInfoRequest
- 更新用户信息的请求：updateUserInfoRequest
- 更新用户信息：updateUserInfo
- 生成邀请码的请求：createInviteCodeRequest
- 更新邀请码：updateInviteCode
- 验证密码的请求：verifyPasswordRequest
- 更改密码的请求：updatePasswordRequest
- 发布优惠券请求：publishCouponRequest
- 查询优惠券请求：queryCouponsRequest
- 更新优惠券列表的分页信息：setCouponPage
- 更新优惠券列表：setCoupons
- 插入优惠卷列表：insertCoupons
- 查看优惠券明细请求：getCouponDetailsRequest
- 更新优惠券明细：insertCouponDetails
- 查看用户已发布过的优惠券列表请求：getUserCouponsRequest
- 更新用户已发布过优惠券列表的分页信息：setUserCouponPage
- 更新用户优惠券列表：setUserCoupons
- 插入用户优惠卷列表：insertUserCoupons
- 更新用户发布的优惠券明细：insertUserCouponDetails
- `下架优惠券`请求：soldOutCouponRequest
- 更新`下架优惠券`状态：updateSoldOutCoupon
- 编辑优惠券请求：editUserCouponRequest
- 更新编辑优惠券信息：updateUserCoupon
- 支付订单请求：payRequest
- 取消订单请求：cancelOrderRequest
- 查看订单列表请求：getOrderListRequest
- 更新订单列表请求：insertOrderListRequest
- 初始化分页信息（订单列表）：initialPage
- 更新分页信息（订单列表）：setOrderPage
- 更新订单列表：setOrderList
- 插入订单列表：insertOrderList
- 查看订单详情请求：getOrderInfoRequest
- 更新订单详情：setOrderInfo
- `开启优惠券`请求：openCouponRequest
- 更新`开启优惠券`信息：openCoupon

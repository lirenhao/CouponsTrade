[TOC]:#
# Table of Contents
- [字典](#字典)
    - [1 登陆signIn、注册signUp](#1-登陆signin注册signup)
    - [2 优惠券：couponsTrade](#2-优惠券couponstrade)
    - [3 订单：order](#3-订单order)

## 字典

注：该文档需要实时维护

### 1 登陆signIn、注册signUp
- **用户名：phoneNo**
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
- 发布优惠券：publishCoupon
- 发布优惠券列表：publishCouponList
- 发布优惠券详情：publishCouponInfo
- 售卖优惠券列表：sellCouponList
- 售卖优惠券详情：sellCouponInfo
- 下架优惠券:soldOut
- 编辑优惠券：edit
- 查询优惠券：query
- **优惠券唯一标识：couponId**
- 优惠券名称：couponName
- 优惠券码：couponCode
- 优惠券原价：originalPrice
- 优惠券售卖价：sellingPrice
- 优惠券券面价：ticketPrice
- 优惠券截止日期：endDate
- 优惠券是否支持自动退货：isAutomaticRefund
- 优惠券类别：couponType
  - 包括：西餐、海鲜、咖啡、面包糕点、火锅、烧烤、冰激凌、快餐、自助餐、其他
- 券码形式：couponModality
  - 包括：图片或文本
- 优惠券描述：describe
  - 包括：可消费日期、可消费的时间、商户的信息暂放在此地方
- 优惠券图片（与商户相关）：picture
- 优惠券是否开启：isOpen
- 优惠券状态：couponState
  - 未发布：unpublished
  - 发布:publishing
  - 付款中:Paying
  - 过期: overdue
  - 已售（未开启）:SoldUnOpen
  - 已售（已开启）:SoldOpened

### 3 订单：order
- 付款方式：paymentMethod
- 微信：weChat
- 支付宝：alipay
- 账号：accountNumber
- 订单编号：orderNo
- 订单支付日期：orderDate
- 订单支付时间：orderTime
- 卖家昵称：sellerNickName
- 买家昵称：buyerNickName
- 卖家订单列表：sellerOrderList
- 卖家订单详情：sellerOrderInfo
- 买家订单列表：buyerOrderList
- 买家订单详情：buyerOrderInfo
- 订单状态：orderState
  - 待支付:waitPay
  - 订单取消:cancel
  - 订单超时:overtime
  - 已支付:payComplete
  - 已确认:Confirmed
  - 已退货:backGoodsComplete
  - 已退款:moneyBackComplete
  - 申请退货:applicationBackGoods
  - 拒绝退货:rejectBackGoods
  - 仲裁开启:arbitrationOpen
  - 仲裁结束:arbitrationEnd

***
[TOC]:#
# Table of Contents
- [字典](#字典)
    - [1 登陆signIn、注册signUp](#1-登陆signin注册signup)
    - [2 优惠券：couponsTrade](#2-优惠券couponstrade)
    - [3 订单：order](#3-订单order)

## 字典

注：该文档需要实时维护

### 1 登陆signIn、注册signUp
- 用户名：phoneNo
- 密码：passWord
- 昵称：nickName
- 手机号：phoneNo
- 验证码：validateCode
- 邀请码：inviteCode
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
- 优惠券唯一标识：couponId
- 优惠券名称：couponName
- 优惠券码：couponCode
- 优惠券原价：originalPrice
- 优惠券售卖价：sellingPrice
- 优惠券券面价：ticketPrice
- 优惠券截止日期：endDate
- 优惠券自动退货：isAutomaticRefund
- 优惠券类别（西餐、海鲜、咖啡、面包糕点、火锅、烧烤、冰激凌、快餐、自助餐、其他）：couponType
- 券码形式选项（图片或文本）：couponModality
- 优惠券描述（可消费日期、可消费的时间、商户的信息暂放在此地方）：describe
- 优惠券图片（与商户相关）：picture
- 优惠券是否开启：isOpen
- 后台存储-优惠券状态(未发布、发布、付款中、过期、已售卖（未开启）、已售（已开启）)：couponState
- 前台展示-优惠券分类：
  - 已售：包括后台存储-优惠券状态中的已售卖（未开启）、已售卖（已开启）
  - 下架：包括后台存储-优惠券状态中的未发布、过期
  - 发布：指后台存储-优惠券状态中的发布


### 3 订单：order
- 付款方式：paymentMethod
- 微信：weChat
- 支付宝：alipay
- 账号：accountNumber
- 订单编号：orderNumber
- 成交日期：transactionDate
- 卖家昵称：sellerNickName
- 买家昵称：buyerNickName
- 卖家订单列表：sellerOrderList
- 卖家订单详情：sellerOrderInfo
- 买家订单列表：buyerOrderList
- 买家订单详情：buyerOrderList
- 订单状态（待支付、已支付、取消、已完成、已退货、已退款）：orderState

***
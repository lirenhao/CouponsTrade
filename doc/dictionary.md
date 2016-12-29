[TOC]:#
# Table of Contents
- [字典](#字典)
    - [1 登陆signIn、注册signUp](#1-登陆signin注册signup)
    - [2 优惠券：couponsTrade](#2-优惠券couponstrade)
    - [3 订单：order](#3-订单order)
    - [4 Action](#4-action)

## 字典

注：该文档需要实时维护

### 1 登陆signIn、注册signUp
- **用户名：phoneNo**：将userName改为phoneNo
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
- 支付宝：aliPay
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

### 4 Action
- **开始等待：onLoad**
- **取消等待：unLoad**
- 显示消息框:showDialog
- 隐藏消息框:hideDialog
- 注册的请求:signUpRequest
- 登录的请求:loginRequest
- 登录:login
- 退出当前用户的请求:logoutRequest
- **退出当前用户：logout**
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
- 下架优惠券请求：soldOutCouponRequest
- 更新下架优惠券状态：updateSoldOutCoupon
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
- 开启优惠券请求：openCouponRequest
- 更新优惠券开启信息：openCoupon

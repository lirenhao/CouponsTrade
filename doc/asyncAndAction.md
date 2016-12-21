[TOC]:#
# Table of Contents
- [1、分析异步async操作和action-20161220](#1分析异步async操作和action-20161220)
    - [1.1 分析异步async操作](#11-分析异步async操作)
    - [1.2 分析action](#12-分析action)


## 1、分析异步async操作和action-20161220
### 1.1 分析异步async操作
- watching
- 后台请求
- action的成功处理、失败处理
- 结束watch

### 1.2 分析action
- Loading： 共用
- success： 发起action有结果的数据，单独写，按照用户、发布优惠券、订单三大类进行如下分析action描述
- field：   共用（暂定）
- unload： 共用

**注：共用action**  
共用消息提示action:提示用户结果

#### 1.2.1 用户
##### 1.2.1.1 注册
- 注册action
- 共用消息提示action
- 请求
  - 参数：昵称、手机号、验证码（只录入模拟验证码）、密码、邀请码
  - 响应回：注册结果（成功、失败）

##### 1.2.1.2 登陆
- 登陆action
- 更新token的action
- 请求
  - 参数：用户名、密码
  - 响应回数据：token

##### 1.2.1.3 获取用户信息
- 获取用户信息action
- 更新用户信息action
- 请求
  - 参数：token
  - 返回：昵称、手机号、邀请码（该用户使用的）、可邀请的数量

##### 1.2.1.4 编辑用户信息
- 编辑用户信息action
- 更新用户信息action(同获取用户信息中的更新用户信息action)
- 请求
  - 参数：token、昵称、手机号、邀请码
  - 返回：更新结果（成功、失败）
  
##### 1.2.1.5 生成邀请码
- 生成邀请码的action
- 更新邀请码的action
- 请求
  - 参数：token
  - 返回：邀请码
  
##### 1.2.1.6 重置密码
- 验证原密码的action
- 验证原密码返回结果action(待定TODO)
- 更新新密码的action
- 共用消息提示action
- 请求
  - 参数：token、原密码
  - 返回：验证结果（成功、失败）
- 请求
  - 参数：token、新密码
  - 返回：重置密码结果（成功、失败）

#### 1.2.2 发布
##### 1.2.2.1 发布优惠券
- 发布action
- 请求
  - 参数（token、优惠券的信息）
    - 优惠券的信息如下：
      - 优惠券唯一标识：state.publish.orderInfo.iD
      - 优惠券名称:state.publish.orderInfo.name
      - 区域信息:state.publish.orderInfo.areaInfo
      - 是否支持优惠券未开启时自动退货:state.publish.orderInfo.isAutomaticRefund
      - 优惠券类别（中餐、西餐）:state.publish.orderInfo.type
      - 券码形式选项（图片或文本）:state.publish.orderInfo.modality
      - 券码（图片或文本）：state.publish.orderInfo.couponCode
      - 卖价：state.publish.orderInfo.sellingPrice
      - 原价：state.publish.orderInfo.originalPrice
      - 券面值：state.publish.orderInfo.ticketPrice
      - 截止日期：state.publish.orderInfo.endDate
      - 图片（与商户相关）：state.publish.orderInfo.picture
      - 优惠券其他内容描述（可消费日期、可消费的时间、商户的信息暂放在此地方）：state.publish.orderInfo.describe
   - 响应回的数据：发布结果：成功、失败

##### 1.2.2.2 查询发布的优惠券列表（首页）
- 公共查询发布的优惠券action
- 更新查询优惠券列表的action
- 插入优惠券列表的action
- 请求
  - 参数：优惠券名称、页数
  - 响应：分页信息（第几页、总条数、每页的条数）、优惠券部分数据组成的数组：优惠券发布的ID、优惠券名称、优惠券售卖价、描述、商家图片

##### 1.2.2.3 查询优惠券详情（首页）
- 查询优惠券详情的action
- 更新优惠券详情的action
- 请求
  - 参数：优惠券ID
  - 响应：优惠券详细信息
      - 优惠券唯一标识：state.publish.orderInfo.iD
      - 优惠券名称:state.publish.orderInfo.name
      - 区域信息:state.publish.orderInfo.areaInfo
      - 是否支持优惠券未开启时自动退货:state.publish.orderInfo.isAutomaticRefund
      - 优惠券类别（中餐、西餐）:state.publish.orderInfo.type
      - 券码形式选项（图片或文本）:state.publish.orderInfo.modality
      - 券码（图片或文本）：state.publish.orderInfo.couponCode
      - 卖价：state.publish.orderInfo.sellingPrice
      - 原价：state.publish.orderInfo.originalPrice
      - 券面值：state.publish.orderInfo.ticketPrice
      - 截止日期：state.publish.orderInfo.endDate
      - 图片（与商户相关）：state.publish.orderInfo.picture
      - 优惠券其他内容描述（可消费日期、可消费的时间、商户的信息暂放在此地方）：state.publish.orderInfo.describe
      - 昵称：nickName
      - 优惠券的状态：state

##### 1.2.2.4 查询已发布优惠券列表（发布）
- 查询已发布优惠券列表action
- 更新已发布优惠券列表action
- 插入已发布优惠券列表action
- 请求
  - 参数：用户token、优惠券的状态（已售卖、已下架、正在售卖）、优惠券名称（允许为空）
  - 响应：分页信息（第几页、总条数、每页的条数）、优惠券部分数据组成的数组：优惠券发布的ID、优惠券名称、优惠券售卖价、描述、商家图片

##### 1.2.2.5 查询优惠券详情（发布）

- 同查询优惠券详情（首页）  暂定
- 比它多展示一个优惠券的券码（加密过的）

##### 1.2.2.6 下架优惠券
- 下架优惠券action
- 更新优惠券action
- 请求
  - 参数：用户Token、优惠券ID
  - 响应:下架结果（成功、失败）
  
##### 1.2.2.7 编辑优惠券  
- 编辑优惠券action
- 更新优惠券action
- 请求
  - 参数:用户token,除券码之外的所有优惠券详情字段
  - 响应：返回结果（成功、失败）

#### 1.2.3 订单
##### 1.2.3.1 生成订单
- 生成订单action 
- 更新订单action
- 请求
  - 参数：用户token,优惠券id
  - 响应：订单详细信息（订单id、生成订单时间、优惠券详细信息）
  
##### 1.2.3.2 支付
- 支付action
- 请求
  - 参数：用户token,订单id
  - 响应：支付结果（成功、失败）注：按照模拟的情况响应数据

##### 1.2.3.3 取消订单
- 取消订单action
- 请求
  - 参数：用户token,订单id
  - 响应：取消订单结果（成功、失败）

##### 1.2.3.4 查看订单列表
- 查看订单列表action
- 更新订单列表action
- 插入订单列表action
- 请求
  - 参数：用户token，订单状态（待支付、已支付、取消、已完成）
  - 响应：优惠券的名称、优惠券商家图片、优惠券的价格、订单状态

##### 1.2.3.5 查看订单详情
- 查看订单详情的action
- 更新订单详情的action
- 请求
  - 参数：用户token，订单ID
  - 响应：卖家昵称、买家昵称、商品图片、优惠券名称、售卖价、生成订单日期、订单编号
  
##### 1.2.3.6 开启券码  
- 开启优惠券action
- 更新开启优惠券action
- 请求
  - 参数：用户token、订单ID
  - 响应：优惠券是否开启标识、优惠券券码(真实)
 
***  
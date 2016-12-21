# 优惠券交易平台

## 1、state结构的定义--20161216  

- state对象包括两个对象：  
   - 用户信息(包括用户Token、用户基本信息、用户已经够买的优惠券信息、用户已发布过的优惠券信息)
   - 查询优惠券信息

### 1.1 state结构--20161216
- 优惠券state的结构定义如下，在下面有state结构定义的翻译。

```
var state = {
    user: {
        token: "111",
        userInfo: {
            nickname: ""
            phoneNo: "",
            inviteCode: "",
            inviteCount: ""
        },
        order: {
            query: {
                orderState: "",
                couponName: ""
            },
            page: {
                total: "",
                number: "",
                size: ""
            },
            orderList: [{
                id: "",
                couponName: "",
                describe: "",
                sellingPrice: "",
                picture: ""
            }],
            orderInfo: {
                orderId,
                orderDate,
                orderTime,
                id: "",
                couponName: "",
                isAutomaticRefund: "",
                couponType: "",
                couponModality: "",
                couponCode: "",
                sellingPrice: "",
                originalPrice: "",
                ticketPrice: "",
                endDate: "",
                picture: "",
                describe: "",
                isOpen:""
            }
        },
        publishCoupon: {
            query: {
                orderState: "",
                couponName: ""
            },
            page: {
                total: "",
                number: "",
                size: ""
            },
            publishList: [{
                id: "1212232321",
                couponName: "呷哺呷哺",
                describe: "该券仅限周三使用，请各位小主们尽快下单吧~~",
                sellingPrice: "70",
                picture: ""
            }],
            publishInfo: {
                id: "",
                couponName: "呷哺呷哺",
                isAutomaticRefund: "是",
                couponType: "西餐",
                couponModality: "文本",
                couponCode: "1234567890",
                sellingPrice: "70",
                originalPrice: "50",
                ticketPrice: "100",
                endDate: "20161215",
                picture: "",
                describe: "该券仅限周三使用，请各位小主们尽快下单吧~~",
                isOpen:"",
                state:"已下架"
            }
        }
    },
    queryCoupon: {
        query: {
            couponName: ""
        },
        page: {
            total: "",
            number: "",
            size: ""
        },
        couponList: [{
            id: "",
            couponName: "",
            describe: "",
            sellingPrice: "",
            picture: ""
        }],
        couponInfo: {
            id: "",
            couponName: "",
            areaInfo: "",
            isAutomaticRefund: "",
            couponType: "",
            couponModality: "",
            couponCode: "",
            sellingPrice: "",
            originalPrice: "",
            ticketPrice: "",
            endDate: "",
            picture: "",
            describe: ""
        }
    }
}
```
###  1.2 state结构翻译--20161216

```
var state={                                                                                   
 用户信息(user){                                                                              
     用户Token(token):"111",                                                                  
     用户基本信息(userInfo)：{
       电话号码(phoneNo)，                                                                     
       邀请人个数(inviteCount)，                                                              
       昵称(nickName)                                                                         
       },                                                                                     
     用户已经够买的优惠券信息(order)：                                                        
      {                                                                                       
          查询条件(query):                                                                    
          {                                                                                   
             订单状态(orderState)，名称(couponName)                                          
          }                                                                                   
          分页信息(page):                                                                     
          {                                                                                   
             总数据条数(total),                                                               
             当前加载第几页(number),                                                          
             每次加载多少条(size),                                                            
          },                                                                                  
          已购买优惠券列表的信息(orderList):是一个数组                                              
          [{                                                                                  
              id,                                                                             
              名称(name),                                                                     
              描述(describe),                                                                     
              卖价(sellingPrice),                                                             
              商家图片(picture)                                                               
          },{},{}],                                                                           
          已购买优惠券详细的信息(orderInfo)                                                         
          {          
             订单号（orderNo），
             订单日期(orderDate)，
             订单时间(orderTime)，                                                                     
             优惠券唯一标识（id），                                                                             
             优惠券名称(couponName)，                                                               
             是否支持优惠券未开启时自动退货(isAutomaticRefund)，                              
             优惠券类别（中餐、西餐）（couponType），                                              
             券码形式选项（图片或文本）(couponModality)，                                           
             券码（图片或文本）（couponCode），                                               
             卖价(sellingPrice)，                                                             
             原价(originalPrice)，                                                            
             券面值(ticketPrice)，                                                            
             截止日期(endDate)，                                                              
             图片（与商户相关）(picture)，                                                    
             优惠券其他内容描述(describe)（可消费日期、可消费的时间、商户的信息暂放在此地方） ，
             优惠券是否开启（isOpen）
          }                                                                                   
       },                                                                                     
                                                                                              
      用户已发布过的优惠券信息(publish)：                                                     
      {                                                                                       
          查询条件(query):                                                                    
          {                                                                                   
             订单状态(orderState)、名称(couponName)                                          
          }                                                                                   
         分页信息(page):                                                                     
         {                                                                                   
            总数据条数(total),                                                               
            当前加载第几页(number),                                                          
            每次加载多少条(size),                                                            
         },                                                                                  
         优惠券列表的信息(orderList):是一个数组                                              
         [{                                                                                  
             优惠券唯一标识（id）,                                                                             
             名称(couponName),                                                                     
             描述(describe),                                                                     
             卖价(sellingPrice),                                                             
             商家图片(picture)                                                               
         },{},{}],                                                                           
         优惠券详细的信息(publishInfo)                                                         
         {                                                                                   
             优惠券唯一标识（id），                                                                             
             优惠券名称(couponName)，                                                               
             是否支持优惠券未开启时自动退货(isAutomaticRefund)，                              
             优惠券类别（中餐、西餐）（couponType），                                               
             券码形式选项（图片或文本）(couponModality)，                                           
             券码（图片或文本）（couponCode），                                               
             卖价(sellingPrice)，                                                             
             原价(originalPrice)，                                                            
             券面值(ticketPrice)，                                                            
             截止日期(endDate)，                                                              
             图片（与商户相关）(picture)，                                                    
             优惠券其他内容描述(describe)（可消费日期、可消费的时间、商户的信息暂放在此地方） ，
             优惠券是否开启（isOpen）
        }                                                                                   
     }                                                                                     
 },                                                                                        
                                                                                              
 查询优惠券（queryCoupon）:                                                                       
 {                                                                                            
    查询条件(query):                                                                    
    {                                                                                   
       优惠券名称(couponName)                                          
    }                                                                                   
    分页信息(page):                                                                     
    {                                                                                   
       总数据条数(total),                                                               
       当前加载第几页(number),                                                          
       每次加载多少条(size),                                                            
    },                                                                                  
    优惠券列表的信息(couponList):是一个数组                                              
    [{                                                                                  
        优惠券唯一标识（id）,                                                                             
        名称(couponName),                                                                     
        描述(describe),                                                                     
        卖价(sellingPrice),                                                             
        商家图片(picture)                                                               
    },{},{}],                                                                           
    优惠券详细的信息(couponInfo)                                                         
    {                                                                                   
       优惠券唯一标识（id），                                                                             
       优惠券名称(couponName)，                                                               
       是否支持优惠券未开启时自动退货(isAutomaticRefund)，                              
       优惠券类别（中餐、西餐）（couponType），                                               
       券码形式选项（图片或文本）(couponModality)，                                           
       券码（图片或文本）（couponCode），                                               
       卖价(sellingPrice)，                                                             
       原价(originalPrice)，                                                            
       券面值(ticketPrice)，                                                            
       截止日期(endDate)，                                                              
       图片（与商户相关）(picture)，                                                    
       优惠券其他内容描述(describe)（可消费日期、可消费的时间、商户的信息暂放在此地方） 
  }                                                                                   
}                                                                                        
}                                                                                             
```

## 2、state的结构分析--20161216

- 优惠券交易平台系统的state应该如何存储数据，该文档定义state的结构进行定义

### 2.1 登陆

  - 传入的数据(向后台发送的数据)：用户名、密码
  - 返回数据：只有一个Token
  - 注：Token是用户的唯一标识，通过它就不用每次发送个人信息，需要身份验证时需要该Token  
  - 请求用户信息时，需要返回的数据：
  user基本信息
    {
      电话号码、邀请人个数、昵称
    }

### 2.2 注册
  - 传入数据：昵称、手机号、验证码（只录入模拟验证码）、密码、邀请码
  - 返回数据：消息结果
  
### 2.3 查询
  - 优惠券列表信息（一个数组包括多个对象）:查询条件(优惠券名称)、分页信息（总数据条数，当前加载第几页，每次加载多少条）
  - 请求回来的数据是一个对象。  

CouponsTrade:
{ 
   查询条件:
   {
      优惠券名称(暂定)
   }
   分页信息:
   {
      总数据条数,
      当前加载第几页,
      每次加载多少条,
   },
   优惠券列表的信息
   {
       优惠券唯一标识,
       名称,
       描述,
       价格,
       图片
   },
   优惠券详细的信息
   {
      优惠券唯一标识、
      优惠券标题、
      区域信息、
      是否支持优惠券未开启时自动退货、
      优惠券类别（中餐、西餐）、
      券码形式选项（图片或文本）、
      券码（图片或文本）、
      卖价、
      原价、
      券面值、
      有效期（区间）、
      图片（与商户相关）、
      优惠券其他内容描述（可消费日期、可消费的时间、商户的信息暂放在此地方）
   }
}

### 2.4 用户订单信息  

用户已经够买的优惠券信息
   {
      查询条件:{订单状态、名称},
      分页信息:{总数据条数,当前加载第几页,每次加载多少条},
      优惠券列表的信息:[{优惠券唯一标识,名称,描述,价格,图片},{},{}],
      优惠券详细的信息:
      {
             优惠券唯一标识、
             优惠券标题、
             区域信息、
             是否支持优惠券未开启时自动退货、
             优惠券类别（中餐、西餐）、
             券码形式选项（图片或文本）、
             券码（图片或文本）、
             卖价、
             原价、
             券面值、
             有效期（区间）、
             图片（与商户相关）、
             优惠券其他内容描述（可消费日期、可消费的时间、商户的信息暂放在此地方）
      }
   }


### 2.5 用户所有发布优惠券信息  

用户已发布过的优惠券信息：是一个对象
   {
      查询条件：{优惠券的状态、名称},
      分页信息: {总数据条数,当前加载第几页,每次加载多少条},
      优惠券列表的信息：{优惠券唯一标识,名称,描述,价格,图片},
      优惠券详细的信息:
            {
                   优惠券唯一标识、
                   优惠券标题、
                   区域信息、
                   是否支持优惠券未开启时自动退货、
                   优惠券类别（中餐、西餐）、
                   券码形式选项（图片或文本）、
                   券码（图片或文本）、
                   卖价、
                   原价、
                   券面值、
                   有效期（区间）、
                   图片（与商户相关）、
                   优惠券其他内容描述（可消费日期、可消费的时间、商户的信息暂放在此地方）
            },
   }

### 2.6 消息的不同类型
  - 需要用户确认，包括确定、取消两个按钮
  - 需要用户确认，包括确定按钮
  - 单纯的通知，没有按钮



## 3、本次讨论注意事项--20161216  

### 3.1 BackButton按钮
- 描述BackButton按钮不能用太多，防止退回到某个编辑页面，如：支付页面  



##  4、后台接口简单描述--20161216
- 注册
  - （昵称、手机号、验证码、密码、邀请码）=>（成功/失败）

- 登录
  - （手机号、密码）=>（Token）

- 生成邀请码
  - （Token）=>（邀请码）

- 查询用户基本信息
  - （Token）=>（用户基本信息）

- 查询用户订单列表
  - （Token、Query-查询、Page-分页）=>（订单列表）

- 查询用户订单详情
  - （Token、id-订单ID）=>（订单详情）

- 查询用户所发布的优惠券列表
  - （Token、Query-查询、Page-分页）=>（所发布优惠券列表）

- 查询用户所发布的优惠券详情
  - （Token、id-优惠券ID）=>（所发布优惠券详情）

- 查询优惠券列表
  - （Query-查询、Page-分页）=>（优惠券列表）

- 查询优惠券详情
  - （id-优惠券ID）=>（优惠券详情）

- 用户发布优惠券
  - （Token、优惠券详情）=>（成功/失败）

- 用户生成订单
  - （Token、id-优惠券ID）=>（订单详情）

- 用户支付订单
  - （Token、id-订单ID）=>（支付结果）

## 5、平台字典名称--20161216

### 5.1 登陆signIn、注册signUp
- 用户名：phoneNo
- 密码：passWord
- 昵称：nickName
- 手机号：phoneNo
- 验证码：validateCode
- 邀请码：inviteCode
- 原密码：oldPassword
- 新密码：newPassword

### 5.2 优惠券：couponsTrade
- 发布优惠券：publish
- 发布优惠券列表：publishCouponList
- 发布优惠券详情：publishCouponInfo
- 售卖优惠券列表：sellCouponList
- 售卖优惠券详情：sellCouponInfo
- 下架:soldOut
- 编辑：edit
- 查询：query
- 唯一标识：id
- 优惠券名称：couponName
- 区域信息：areaInfo
- 优惠券码：couponCode
- 原价：originalPrice
- 售卖价：sellingPrice
- 券面价：ticketPrice
- 截止日期：endDate
- 自动退货：isAutomaticRefund
- 优惠券类别（中餐、西餐）：couponType
- 券码形式选项（图片或文本）：couponModality
- 描述（可消费日期、可消费的时间、商户的信息暂放在此地方）：describe
- 图片（与商户相关）：picture
- 优惠券是否开启：isOpen

### 5.3 订单：order
- 付款方式：paymentMethod
- 微信：weChat
- 支付宝：alipay
- 账号：accountNumber
- 订单编号：orderNumber
- 成交时间：transactionDate
- 卖家昵称：sellNickName
- 买家昵称：buyNickName

## 6、分析异步async操作和action-20161220

### 6.1 分析异步async操作
- watching
- 后台请求
- action的成功处理、失败处理
- 结束watch

### 6.2 分析action
- Loading 共用
- success 发起action有结果的数据，单独写
- field   共用（暂定）
- unload 共用

**注：共用action**  
共用消息提示action:提示用户结果

#### 6.2.1 用户

##### 6.2.1.1 注册
- 注册action
- 共用消息提示action
- 请求
  - 参数：昵称、手机号、验证码（只录入模拟验证码）、密码、邀请码
  - 响应回：注册结果（成功、失败）

##### 6.2.1.2 登陆
- 登陆action
- 更新token的action
- 请求
  - 参数：用户名、密码
  - 响应回数据：token

##### 6.2.1.3 获取用户信息
- 获取用户信息action
- 更新用户信息action
- 请求
  - 参数：token
  - 返回：昵称、手机号、邀请码（该用户使用的）、可邀请的数量

##### 6.2.1.4 编辑用户信息
- 编辑用户信息action
- 更新用户信息action(同获取用户信息中的更新用户信息action)
- 请求
  - 参数：token、昵称、手机号、邀请码
  - 返回：更新结果（成功、失败）
  
##### 6.2.1.5 生成邀请码
- 生成邀请码的action
- 更新邀请码的action
- 请求
  - 参数：token
  - 返回：邀请码
  
##### 6.2.1.6 重置密码
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


#### 6.2.2 发布

##### 6.2.2.1 发布优惠券
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

##### 6.2.2.2 查询发布的优惠券列表（首页）
- 公共查询发布的优惠券action
- 更新查询优惠券列表的action
- 插入优惠券列表的action
- 请求
  - 参数：优惠券名称、页数
  - 响应：分页信息（第几页、总条数、每页的条数）、优惠券部分数据组成的数组：优惠券发布的ID、优惠券名称、优惠券售卖价、描述、商家图片

##### 6.2.2.3 查询优惠券详情（首页）
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

##### 6.2.2.4 查询已发布优惠券列表（发布）
- 查询已发布优惠券列表action
- 更新已发布优惠券列表action
- 插入已发布优惠券列表action
- 请求
  - 参数：用户token、优惠券的状态（已售卖、已下架、正在售卖）、优惠券名称（允许为空）
  - 响应：分页信息（第几页、总条数、每页的条数）、优惠券部分数据组成的数组：优惠券发布的ID、优惠券名称、优惠券售卖价、描述、商家图片

##### 6.2.2.5 查询优惠券详情（发布）

- 同查询优惠券详情（首页）  暂定
- 比它多展示一个优惠券的券码（加密过的）

##### 6.2.2.6 下架优惠券
- 下架优惠券action
- 更新优惠券action
- 请求
  - 参数：用户Token、优惠券ID
  - 响应:下架结果（成功、失败）
  
##### 6.2.2.7 编辑优惠券  
- 编辑优惠券action
- 更新优惠券action
- 请求
  - 参数:用户token,除券码之外的所有优惠券详情字段
  - 响应：返回结果（成功、失败）

#### 6.2.3 订单

##### 6.2.3.1 生成订单
- 生成订单action 
- 更新订单action
- 请求
  - 参数：用户token,优惠券id
  - 响应：订单详细信息（订单id、生成订单时间、优惠券详细信息）
  
##### 6.2.3.2 支付
- 支付action
- 请求
  - 参数：用户token,订单id
  - 响应：支付结果（成功、失败）注：按照模拟的情况响应数据

##### 6.2.3.3 取消订单
- 取消订单action
- 请求
  - 参数：用户token,订单id
  - 响应：取消订单结果（成功、失败）

##### 6.2.3.4 查看订单列表
- 查看订单列表action
- 更新订单列表action
- 插入订单列表action
- 请求
  - 参数：用户token，订单状态（待支付、已支付、取消、已完成）
  - 响应：优惠券的名称、优惠券商家图片、优惠券的价格、订单状态

##### 6.2.3.5 查看订单详情
- 查看订单详情的action
- 更新订单详情的action
- 请求
  - 参数：用户token，订单ID
  - 响应：卖家昵称、买家昵称、商品图片、优惠券名称、售卖价、生成订单日期、订单编号
  
##### 6.2.3.6 开启券码  
- 开启优惠券action
- 更新开启优惠券action
- 请求
  - 参数：用户token、订单ID
  - 响应：优惠券是否开启标识、优惠券券码(真实)
  
  
  
### 6.3 项目中遇到的问题-20161220
- 当正在查询优惠券时，有新发布的优惠券和新编辑的优惠券，怎么处理
 - 服务器中查询的数据，给平台总数和前10条数据
 - 假如新发布的优惠券在服务器中的前10条，就会导致11-n查不到该条数据
 - 加载最新数据的方式，不可行
 - 通过懒加载的方式加载数据处理问题，是否可行？

- 加密优惠券码在前端还是后端？
  - 暂定后台
  
- 订单超时是否需要action?
  - 不需要，用一个定时器进行倒计时
  - 当正在支付过程中，退出登陆了，需要从服务器响应回数据进行查看该订单是否能继续支付
  - 服务器需要传回服务器的当前时间
  - 如何处理订单超时？
    - 当正在支付中的订单用户登出时，通过“用户当前时间” - “服务器返回的订单信息中的生成订单时间”=倒计时





































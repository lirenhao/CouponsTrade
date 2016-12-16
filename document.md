# 优惠券交易平台

## 一、state结构的定义
- state对象包括四个对象：用户信息(包括用户Token、用户基本信息、用户已经够买的优惠券信息、用户已发布过的优惠券信息)、查询优惠券信息

### state结构
- 优惠券state的结构定义如下，在下面有该状态的翻译。

```
var state = {
    user: {
        token: "111",
        userInfo: {
            phone: "",
            inviteCount: "",
            nickName: ""
        },
        order: {
            query: {
                orderState: "",
                couponsName: ""
            },
            page: {
                total: "",
                number: "",
                size: ""
            },
            orderList: [{
                iD: "",
                name: "",
                desc: "",
                sellingPrice: "",
                picture: ""
            }],
            orderInfo: {
                iD: "",
                name: "",
                areaInfo: "",
                isAutomaticRefund: "",
                type: "",
                modality: "",
                couponCode: "",
                sellingPrice: "",
                originalPrice: "",
                ticketPrice: "",
                endDate: "",
                picture: "",
                describe: ""
            }
        },
        publish: {
            query: {
                orderState: "",
                couponsName: ""
            },
            page: {
                total: "",
                number: "",
                size: ""
            },
            publishList: [{
                iD: "1212232321",
                name: "呷哺呷哺",
                desc: "该券仅限周三使用，请各位小主们尽快下单吧~~",
                sellingPrice: "70",
                picture: ""
            }],
            publishInfo: {
                iD: "",
                name: "呷哺呷哺",
                areaInfo: "北京",
                isAutomaticRefund: "是",
                type: "西餐",
                modality: "文本",
                couponCode: "1234567890",
                sellingPrice: "70",
                originalPrice: "50",
                ticketPrice: "100",
                endDate: "20161215",
                picture: "",
                describe: "该券仅限周三使用，请各位小主们尽快下单吧~~"
            }
        }
    },
    coupons: {
        query: {
            couponsName: ""
        },
        page: {
            total: "",
            number: "",
            size: ""
        },
        couponsList: [{
            iD: "",
            name: "",
            desc: "",
            sellingPrice: "",
            picture: ""
        }],
        couponsInfo: {
            iD: "",
            name: "",
            areaInfo: "",
            isAutomaticRefund: "",
            type: "",
            modality: "",
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
###  state结构翻译

```
var state={                                                                                   
 用户信息(user){                                                                              
     用户Token(token):"111",                                                                  
     用户基本信息(userInfo)：{
       电话号码(phone)、                                                                     
       邀请人个数(inviteCount)、                                                              
       昵称(nickName)                                                                         
       },                                                                                     
     用户已经够买的优惠券信息(order)：                                                        
      {                                                                                       
          查询条件(query):                                                                    
          {                                                                                   
             订单状态(orderState)、名称(couponsName)                                          
          }                                                                                   
          分页信息(page):                                                                     
          {                                                                                   
             总数据条数(total),                                                               
             当前加载第几页(number),                                                          
             每次加载多少条(size),                                                            
          },                                                                                  
          优惠券列表的信息(orderList):是一个数组                                              
          [{                                                                                  
              iD,                                                                             
              名称(name),                                                                     
              描述(desc),                                                                     
              卖价(sellingPrice),                                                             
              商家图片(picture)                                                               
          },{},{}],                                                                           
          优惠券详细的信息(orderInfo)                                                         
          {                                                                                   
             iD、                                                                             
             优惠券名称(name)、                                                               
             区域信息(areaInfo)、                                                             
             是否支持优惠券未开启时自动退货(isAutomaticRefund)、                              
             优惠券类别（中餐、西餐）（type）、                                               
             券码形式选项（图片或文本）(modality)、                                           
             券码（图片或文本）（couponCode）、                                               
             卖价(sellingPrice)、                                                             
             原价(originalPrice)、                                                            
             券面值(ticketPrice)、                                                            
             截止日期(endDate)、                                                              
             图片（与商户相关）(picture)、                                                    
             优惠券其他内容描述(describe)（可消费日期、可消费的时间、商户的信息暂放在此地方） 
          }                                                                                   
       },                                                                                     
                                                                                              
      用户已发布过的优惠券信息(publish)：                                                     
      {                                                                                       
          查询条件(query):                                                                    
          {                                                                                   
             订单状态(orderState)、名称(couponsName)                                          
          }                                                                                   
          分页信息(page):                                                                     
                         {                                                                                   
                              总数据条数(total),                                                               
                              当前加载第几页(number),                                                          
                              每次加载多少条(size),                                                            
                         },                                                                                  
                         优惠券列表的信息(orderList):是一个数组                                              
                         [{                                                                                  
                               iD,                                                                             
                               名称(name),                                                                     
                               描述(desc),                                                                     
                               卖价(sellingPrice),                                                             
                               商家图片(picture)                                                               
                         },{},{}],                                                                           
                         优惠券详细的信息(orderInfo)                                                         
                         {                                                                                   
                              iD、                                                                             
                              优惠券名称(name)、                                                               
                              区域信息(areaInfo)、                                                             
                              是否支持优惠券未开启时自动退货(isAutomaticRefund)、                              
                              优惠券类别（中餐、西餐）（type）、                                               
                              券码形式选项（图片或文本）(modality)、                                           
                              券码（图片或文本）（couponCode）、                                               
                              卖价(sellingPrice)、                                                             
                              原价(originalPrice)、                                                            
                              券面值(ticketPrice)、                                                            
                              截止日期(endDate)、                                                              
                              图片（与商户相关）(picture)、                                                    
                              优惠券其他内容描述(describe)（可消费日期、可消费的时间、商户的信息暂放在此地方） 
                         }                                                                                   
      }                                                                                      
    },                                                                                        
                                                                                              
 查询优惠券（coupons）:                                                                       
 {                                                                                            
    查询条件(query):                                                                          
    {                                                                                         
       优惠券名称（couponsName）(暂定)                                                        
    }                                                                                         
    分页信息(page):                                                                     
     {                                                                                   
          总数据条数(total),                                                               
          当前加载第几页(number),                                                          
          每次加载多少条(size),                                                            
     },                                                                                  
     优惠券列表的信息(orderList):是一个数组                                              
     [{                                                                                  
           iD,                                                                             
           名称(name),                                                                     
           描述(desc),                                                                     
           卖价(sellingPrice),                                                             
           商家图片(picture)                                                               
     },{},{}],                                                                           
     优惠券详细的信息(orderInfo)                                                         
     {                                                                                   
          iD、                                                                             
          优惠券名称(name)、                                                               
          区域信息(areaInfo)、                                                             
          是否支持优惠券未开启时自动退货(isAutomaticRefund)、                              
          优惠券类别（中餐、西餐）（type）、                                               
          券码形式选项（图片或文本）(modality)、                                           
          券码（图片或文本）（couponCode）、                                               
          卖价(sellingPrice)、                                                             
          原价(originalPrice)、                                                            
          券面值(ticketPrice)、                                                            
          截止日期(endDate)、                                                              
          图片（与商户相关）(picture)、                                                    
          优惠券其他内容描述(describe)（可消费日期、可消费的时间、商户的信息暂放在此地方） 
     }                                                                                          
 }                                                                                            
}                                                                                             
```

## 二、何时会操作state

- 详细分析优惠券交易平台项目操作中从state里面**存和取**数据。

### 登陆

- 需要**查询**验证“state中用户信息的Token”与“服务器返回的Token”是否一致
- state.用户信息.用户Token  

### 注册

- 无

### 购买优惠券   

- 描述：用户购买优惠券需要操作state的地方

#### 加载平台首页  

- 需要**查询**state中的“查询优惠券”中部分数据（待定加载哪部分数据）
- 操作的state为
  - state.查询优惠券.查询条件
  - state.查询优惠券.分页信息
  - state.查询优惠券.优惠券列表的信息

#### 查询优惠券列表

- 需要**查询**state中的“查询优惠券”中的部分数据（待定）
- 操作的state为
  - state.查询优惠券.查询条件
  - state.查询优惠券.分页信息
  - state.查询优惠券.优惠券列表的信息

#### 查看优惠券详情

- 需要**查询**state中的“查询优惠券”中的部分数据
- 操作的state为
  - state.查询优惠券.优惠券详细的信息.所有信息

#### 购买优惠券

- 需要**查询**state中的“查询优惠券”中的部分数据、“用户信息”的部分数据
- 操作的state为
  - state.用户信息.用户基本信息.昵称
  - state.查询优惠券.优惠券详细的信息.标题
  - state.查询优惠券.优惠券详细的信息.卖价
  - state.查询优惠券.优惠券详细的信息.商家图片

#### 支付订单

- 需要**查询**state中的"查询优惠券"中的优惠券详细的信息

#### 查看订单

- 需要**查询**state中的"用户已经够买的优惠券信息"中的优惠券详细的信息
- 操作的state为
  - state.用户已经够买的优惠券信息.查询条件（未支付）
  - state.用户已经够买的优惠券信息.优惠券详细的信息

### 发布优惠券

- 描述：“用户发布优惠券”和“发布过的优惠券”需要操作state的地方

#### 发布优惠券

- 

#### 查看已发布优惠券列表

#### 查看优惠券详情

#### 编辑优惠券

#### 下架优惠券



### 个人中心

#### 查看个人信息

#### 编辑个人信息

#### 生成邀请码

#### 重置密码




## 三、state的结构分析

- 优惠券交易平台系统的state应该如何存储数据，该文档定义state的结构进行定义

### 1、登陆

  - 传入的数据(向后台发送的数据)：用户名、密码
  - 返回数据：只有一个Token
  - 注：Token是用户的唯一标识，通过它就不用每次发送个人信息，需要身份验证时需要该Token  
  - 请求用户信息时，需要返回的数据：
  user基本信息
    {
      电话号码、邀请人个数、昵称
    }

### 2、注册
  - 传入数据：昵称、手机号、验证码（只录入模拟验证码）、密码、邀请码
  - 返回数据：消息结果
  
### 3、查询
  - 优惠券列表信息（一个数组包括多个对象）:查询条件(优惠券名称)、分页信息（总数据条数，当前加载第几页，每次加载多少条）
  - 请求回来的数据是一个数组包含多个对象。  

CouponsTrade:[
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
       ID,
       名称,
       描述,
       价格,
       图片
   },
   优惠券详细的信息
   {
      ID、
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
},{},{},{},{}

]

### 4、用户订单信息  

用户已经够买的优惠券信息：是一个数组存了多个对象
[
   {
      查询条件：{订单状态、名称},
      分页信息: {总数据条数,当前加载第几页,每次加载多少条},
      优惠券列表的信息：{ID,名称,描述,价格,图片},
      优惠券详细的信息
      {
             ID、
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
          
   },{}，{}，{}，{}
]

### 5、用户所有发布优惠券信息  

用户已发布过的优惠券信息：是一个数组存了多个对象
[
   {
      查询条件：{优惠券的状态、名称},
      分页信息: {总数据条数,当前加载第几页,每次加载多少条},
      优惠券列表的信息：{ID,名称,描述,价格,图片},
      优惠券详细的信息:
            {
                   ID、
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

   },{}，{}，{}，{}
]


### 6、消息的不同类型
  - 需要用户确认，包括确定、取消两个按钮
  - 需要用户确认，包括确定按钮
  - 单纯的通知，没有按钮



## 本次讨论注意事项  

### 1. BackButton按钮
- 描述BackButton按钮不能用太多，防止退回到某个编辑页面，如：支付页面

##  后台接口简单描述
注册
（昵称、手机号、验证码、密码、邀请码）=>（成功/失败）

登录
（手机号、密码）=>（Token）

生成邀请码
（Token）=>（邀请码）

查询用户基本信息
（Token）=>（用户基本信息）

查询用户订单列表
（Token、Query-查询、Page-分页）=>（订单列表）

查询用户订单详情
（Token、id-订单ID）=>（订单详情）

查询用户所发布的优惠券列表
（Token、Query-查询、Page-分页）=>（所发布优惠券列表）

查询用户所发布的优惠券详情
（Token、id-优惠券ID）=>（所发布优惠券详情）

查询优惠券列表
（Query-查询、Page-分页）=>（优惠券列表）

查询优惠券详情
（id-优惠券ID）=>（优惠券详情）

用户发布优惠券
（Token、优惠券详情）=>（成功/失败）

用户生成订单
（Token、id-优惠券ID）=>（订单详情）

用户支付订单
（Token、id-订单ID）=>（支付结果）
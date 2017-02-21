[TOC]:#

# Table of Contents
- [1、state结构的定义--20161216](#1state结构的定义--20161216)
    - [1.1 state结构--20161216](#11-state结构--20161216)
    - [1.2 state结构翻译--20161216](#12-state结构翻译--20161216)
- [2、state的结构分析--20161216](#2state的结构分析--20161216)
    - [2.1 登陆](#21-登陆)
    - [2.2 查询](#22-查询)
    - [2.3 用户订单信息](#23-用户订单信息)
    - [2.4 用户发布的优惠券信息](#24-用户发布的优惠券信息)
    - [2.5 state分析结果](#25-state分析结果)


## 1、state结构的定义--20161216  

- 介绍：state对象包括以下5个对象 
- 包括:用户Token、用户基本信息（userInfo）、订单信息（order）、用户已发布过的优惠券信息（publishCoupon）、查询优惠券信息（queryCoupon）

### 1.1 state结构--20161216
- 优惠券state的结构定义如下

```
var state = {
    token: "111",
    userInfo: {
        nickname: "",
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
            picture: "",
            orderState:""
        }],
        orderInfo: {
            orderNo:"",
            orderDate:"",
            orderTime:"",
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
            isOpen:"",
            sellerNickName:"",
            orderState:""
        }
    },
    publishedCoupons: {
        query: {
             couponName: ""
        },
        page: {
             total: "",
             number: "",
             size: ""
        },
        CouponList: [{
            id: "1212232321",
            couponName: "呷哺呷哺",
            describe: "该券仅限周三使用，请各位小主们尽快下单吧~~",
            sellingPrice: "70",
        }],
        CouponInfo: {
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
            describe: "该券仅限周三使用，请各位小主们尽快下单吧~~",
            isOpen:"",
            couponState:"已下架"
        }
    },
    queryCoupons: {
        query: {
            couponName: ""
        },
        page: {
            total: "",
            number: "",
            size: ""
        },
        CouponList:[{
            id:"",
            couponName: "",
            describe: "",
            sellingPrice: ""
            },{}],
        CouponInfo: {
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
            describe: "",
            userName:"",
            couponState:"",
            nickName:""
        }
    }
}
```
###  1.2 state结构翻译--20161216
- state结构定义的翻译如下。

```
var state={                                                                                   
     登录用户Token(token):"",                                                                  
     登录用户基本信息(userInfo)：{
       手机号(phoneNo)，                                                                     
       邀请人个数(inviteCount)，                                                              
       昵称(nickName)                                                                         
       },                                                                                     
      订单(order)：                                                        
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
          订单列表(orderList):是一个数组                                              
          [{                                                                                  
              优惠券唯一标识（id）,                                                                             
              优惠券名称(name),                                                                     
              优惠券描述(describe),                                                                     
              售卖价(sellingPrice),                                                             
              优惠券相关图片(picture)，
              订单状态(orderState)
          },{},{}],                                                                           
          订单详情(orderInfo)                                                         
          {          
             订单号（orderNo），
             订单日期(orderDate)，
             订单时间(orderTime)，                                                                     
             优惠券唯一标识（id），                                                                             
             优惠券名称(couponName)，                                                               
             可自动退货(isAutomaticRefund)，                              
             优惠券类别（couponType），                                              
             券码形式：图片或文本(couponModality)，                                           
             券码（couponCode），                                               
             售卖价(sellingPrice)，                                                             
             原价(originalPrice)，                                                            
             券面价(ticketPrice)，                                                            
             截止日期(endDate)，                                                              
             优惠券相关图片(picture)，                                                    
             优惠券描述(describe)（可消费日期、可消费的时间、商户的信息暂放在此地方） ，
             是否已开启（isOpen），
             卖家昵称（sellerNickName），
             订单状态（orderState）
          }                                                                                   
       },                                                                                     
                                                                                              
      用户已发布过的优惠券信息(publishedCoupons)：                                                     
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
         优惠券列表的信息(CouponList):是一个数组                                              
         [{                                                                                  
             优惠券唯一标识（id）,                                                                             
             优惠券名称(couponName),                                                                     
             优惠券描述(describe),                                                                     
             售卖价(sellingPrice),                                                             
             优惠券相关图片(picture),                                                               
         },{},{}],                                                                           
         优惠券详细的信息(CouponInfo)                                                         
         {                                                                                   
             优惠券唯一标识（id），                                                                             
             优惠券名称(couponName)，                                                               
             可自动退货(isAutomaticRefund)，                              
             优惠券类别（西餐、海鲜、咖啡、面包糕点、火锅、烧烤、冰激凌、快餐、自助餐、其他）（couponType），                                               
             券码形式选项（图片或文本）(couponModality)，                                           
             券码（couponCode），                                               
             售卖价(sellingPrice)，                                                             
             原价(originalPrice)，                                                            
             券面价(ticketPrice)，                                                            
             截止日期(endDate)，                                                              
             优惠券相关图片(picture)，                                                    
             优惠券描述(describe)（可消费日期、可消费的时间、商户的信息暂放在此地方） ，
             优惠券是否开启（isOpen）,
             优惠券状态（couponState）
          }                                                                                     
      },                                                                                        
                                                                                              
      查询优惠券信息（queryCoupons）:                                                                       
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
            优惠券列表的信息(CouponList):是一个数组                                              
            [{                                                                                  
                优惠券唯一标识（id）,                                                                             
                优惠券名称(couponName),                                                                     
                描述(describe),                                                                     
                售卖价(sellingPrice),                                                             
                优惠券相关图片(picture)                                                               
            },{},{}],                                                                           
            优惠券详细的信息(CouponInfo)                                                         
            {                                                                                   
               优惠券唯一标识（id），                                                                             
               优惠券名称(couponName)，                                                               
               可自动退货(isAutomaticRefund)，                              
               优惠券类别（西餐、海鲜、咖啡、面包糕点、火锅、烧烤、冰激凌、快餐、自助餐、其他）（couponType），                                               
               券码形式：图片、文本(couponModality)，                                           
               券码（couponCode），                                               
               售卖价(sellingPrice)，                                                             
               原价(originalPrice)，                                                            
               券面价(ticketPrice)，                                                            
               截止日期(endDate)，                                                              
               优惠券相关图片(picture)，                                                    
               优惠券描述(describe)（可消费日期、可消费的时间、商户的信息暂放在此地方）,
               卖家用户名：userName，
               卖家昵称：nickName,
               优惠券状态：couponState
            }                                                                                   
      }                                                                                        
}                                                                                             
```

***

## 2、state的结构分析--20161216

- 优惠券交易平台系统的state应该如何存储数据，该文档定义state的结构进行定义

### 2.1 登陆

  - 传入的数据(向后台发送的数据)：用户名、密码
  - 返回数据：只有一个Token
  - 注：Token是用户的唯一标识，通过它就不用每次发送个人信息，需要身份验证时需要该Token  
  - 请求用户信息时，需要返回的数据：
  user基本信息
    {
      手机号、邀请人个数、昵称
    }

  
### 2.2 查询
  - 优惠券列表信息（一个数组包括多个对象）:查询条件(优惠券名称)、分页信息（总数据条数，当前加载第几页，每次加载多少条）
  - 请求回来的数据是一个对象。  

CouponsTrade:
{ 
   查询条件:
   {
      优惠券名称
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
       优惠券名称,
       优惠券描述,
       售卖价,
       优惠券相关图片
   },
   优惠券详细的信息
   {
      优惠券唯一标识、
      优惠券名称、
      可自动退货、
      优惠券类别、
      券码形式：图片或文本、
      券码、
      售卖价、
      原价、
      券面价、
      截止日期、
      优惠券相关图片、
      优惠券描述：可消费日期、可消费的时间、商户的信息暂放在此地方
   }
}

### 2.3 用户订单信息  

用户已经够买的优惠券信息
   {
      查询条件:{订单状态、优惠券名称},
      分页信息:{总数据条数,当前加载第几页,每次加载多少条},
      优惠券列表的信息:[{优惠券唯一标识,名称,描述,价格,图片},{},{}],
      优惠券详细的信息:
      {
             订单号、
             订单日期、
             订单时间、
             优惠券唯一标识、
             优惠券名称、
             可自动退货、
             优惠券类别：西餐、海鲜、咖啡、面包糕点、火锅、烧烤、冰激凌、快餐、自助餐、其他、
             券码形式:图片、文本
             券码、
             原价、
             售卖价、
             券面价、
             截止日期、
             优惠券相关图片、
             优惠券描述：包括：可消费日期、可消费的时间、商户的信息暂放在此地方、
             卖家昵称、
             是否已开启
      }
   }


### 2.4 用户发布的优惠券信息  

用户已发布过的优惠券信息：是一个对象
   {
      查询条件：{优惠券的状态、优惠券名称},
      分页信息: {总数据条数,当前加载第几页,每次加载多少条},
      优惠券列表的信息：{优惠券唯一标识,名称,描述,价格,图片},
      优惠券详细的信息:
            {
                   优惠券唯一标识、
                   优惠券名称、
                   可自动退货、
                   优惠券类别:西餐、海鲜、咖啡、面包糕点、火锅、烧烤、冰激凌、快餐、自助餐、其他、
                   券码形式：图片或文本、
                   券码、
                   售卖价、
                   原价、
                   券面价、
                   截止日期、
                   优惠券相关图片、
                   优惠券描述：可消费日期、可消费的时间、商户的信息暂放在此地方
            },
   }

 
### 2.5 state分析结果
- state对象包括五个对象：  
   - 包括用户Token、用户基本信息、用户已经够买的优惠券信息、用户已发布过的优惠券信息、查询优惠券信息

***
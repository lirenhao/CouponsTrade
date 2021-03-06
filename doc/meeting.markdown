
[TOC]:#

# Table of Contents
- [20170303-会议内容](#20170303-会议内容)
    - [项目框架](#项目框架)
- [20170308-会议内容](#20170308-会议内容)
    - [关于开发服务端和客户端一些内容](#关于开发服务端和客户端一些内容)
- [20170301-会议内容](#20170301-会议内容)
    - [风险分析小组成立](#风险分析小组成立)
- [20170227-会议主要内容](#20170227-会议主要内容)
    - [项目设计：](#项目设计)
    - [项目测试：](#项目测试)
    - [项目管理：](#项目管理)
- [技术](#技术)
    - [1  订单-20161227](#1--订单-20161227)
    - [2 redux-saga-20161226](#2-redux-saga-20161226)
    - [3 Generator-20161226](#3-generator-20161226)
    - [4 脚手架-20161228](#4-脚手架-20161228)
    - [5 多用户并发的问题要考虑-20161228](#5-多用户并发的问题要考虑-20161228)
    - [6 游客需要注册，登录才能查询和查看优惠券页面](#6-游客需要注册登录才能查询和查看优惠券页面)
    - [7 图片上传的问题](#7-图片上传的问题)
- [文档](#文档)
- [1 项目交付物-20161221](#1-项目交付物-20161221)

描述：项目中需要应用的技术、提交的交付物、注意事项

## 20170303-会议内容
### 项目框架
- 确定接口
  - 框架与子系统之间如何传递消息
  - 子系统之间的接口如何确定
- 框架分为：head、page、tag，
  - head导航
  - page：
    - page之间是物理隔离的
    - page用来做子系统的布局
    - 会有多个子系统的集成
  - tag:参数包括名字、图标、位置、path（待定）、按钮（）
- 框架的搭建要符合约定大于配置
- 项目目录：page之间、子系统之间无相互引用，通过字符串path串联起来
  - index页面是可以配置的，作用是看哪个page标为index

## 20170308-会议内容
### 关于开发服务端和客户端一些内容
#### web端存储数据有两种途径
- localStorage和sessionStorage

##### localStorage
- localStorage是全局的，是application级的
- 用法：
  - cookie的部分信息存储到localStorage中，可以减少客户端向服务端传送的信息
  - 跨域的javascript，无法读取别人的localStorage，javascript只能访问自己域名的localStorage
    - 攻击方式：可以操作本地的dom，给dom中添加一个javascript标签。
    - 因为每个请求都带有cookie，原来通过document.cookies获取所有的cookie，现在将cookie存储到localStorage中，每个cookie都有自己的key，不容易获取cookie的所有的信息
- 什么样的cookie需要存储在localStorage中？
  - 如：需要在服务器端存储起来的数据，需要用localStorage存储起来
  - 如：初始化的一些数据不需要存储到localStorage中
- cookie中的部分信息存储到localstorage中，能有效的阻止了网络嗅探，但不能完全阻止跨域攻击。
- 注：clear localStorage是清除

##### sessionStorage
- sessionStorage是会话级的
- 举例：无论打开多少网页，前提是会话为keep online，sessionStorage都是共享的，但关闭网页后sessionStorage就没了。

#### 客户端的cookie
- 服务端传cookie，要想cookie不暴露，减少cookie的传输,需要将cookie存到localStorage或sessionStorage中，然后将cookie删掉
- 将cookie设置为http only，cookie都是读不出来的
- 注：cookie设置为http only,客户端不能访问，但是可以修改，可以进行直接赋值


## 20170301-会议内容
### 风险分析小组成立
- **术语**
  - 平台：优惠券交易平台
  - 漏洞：在`平台`现有规则下存在的缺陷
- **描述**
  - 为了分析、预估`平台`的风险,我们需要成立一个风险分析小组。从业务逻辑、`平台`交易等不同方面进行考虑，重点考虑交易方面，查找`平台`的`漏洞`并提出相应的初步解决方案。
    - 举例：前提---买家A和卖家B都是我们`平台`用户。买家A在`平台`购买了卖家B的优惠券，买家A已使用了优惠券，却在`平台`申请仲裁，仲裁投票结果为买家A胜利，结果`平台`会从卖家B的电子钱包扣钱退给买家A，钱包余额不足，则由`平台`垫付，给卖家B或`平台`带来损失的情况。
    - 分析：针对用户欠钱，目前我们考虑到了该缺陷，但我们不能抓人，解决不了问题
    - 解决方案：无
- **步骤**
  - 首先根据`平台`项目的流程思考并进行分析，找出`平台`的`漏洞`
  - 然后根据查找的`漏洞`，写出初步的解决方案
  - 最后大家及时沟通，由孔莉进行记录和整理，并及时跟领导汇报
- **备注**
  - 目前二期项目`平台`暂时不处理这些`漏洞`,只有我们内部诚实的用户进行使用
- **风险小组成员**
  - 孔莉
  - 纪鹏飞
  - 潭冬
  - 曹少军


## 20170227-会议主要内容
### 项目设计：
- 模块化模型要定义：保证模型的模块很粗
  - 关注模块，才能独立出子系统，这样就会有边界，知道自己做什么
  - 例如：吃饭
- 模块系统与子系统的区别是什么？
  - 模块系统：
    - 模块不可以当成一个子系统
  - 子系统：
    - 子系统可以当成一个模块
    - 子系统可以单独跑
    - 子系统耦合性低，内聚性高，边界性强，考虑问题更专一

- 将目录结构划分清晰
- 组件如何划分？有两种方式如下：
  - 第一种：将组件目录再细分
  - 第二种：在容器中写组件，可以有专有组件和共用组件。
- 组件定义的要求：
  - 代码要重用

### 项目测试：
- 要求：测试要从业务出发，做到每次重构代码，不影响测试代码
- 需要写测试代码的部分
  - 功能性函数
  - 功能性模型

### 项目管理：
- 内容：
  - 要有计划，来体现价值
- 要求：
  - 要一眼能看出来做了什么，任务何时开始，何时结束
- 作用：
   - 监督作用，在规定期限内完成任务
   - 汇报工作有依据
   - 保证项目进度
- 项目管理用的工具：
   - github中的issues
   - 集成项目的任务管理工具：task


## 技术
### 1  订单-20161227 
- 订单概念在WEB中很重要，需要应用如下技术实现订单功能 
  - 标准的http请求
    - 在网络正常的前提下，请求是同步的、成对的，有请求就有响应
  - web server的异步
    - 如：express，play都支持异步处理
  - web socket
    - 不只是异步处理，重要的是请求与响应分离。一个请求可以没任何响应，一个响应也可以没有请求

### 2 redux-saga-20161226
- 从过程来讲是做action的迭代
- redux-saga解决了哪些问题
  - 长事务
  - 剥离职责
    - 将reducer中的任务编排部分放在了redux-saga中来处理
  - 提取负作用

### 3 Generator-20161226
- Generator不是一次性执行完的。

### 4 脚手架-20161228
- 需要定义一个脚手架。
  - 原因：针对项目存在大量的Actor，且用的词不稳当
  - 如：写小工具，定义一个文本，写action
  - 好处：避免错误、命名统一、方便改名字

### 5 多用户并发的问题要考虑-20161228
- 同时支持多少个用户发请求
  - 同时支持多少个用户在线查询
  - 同时支持多少个用户提交订单
  - 统计在每天的中午和晚上有多少用户在购券
- 分析（未完成）
  
### 6 游客需要注册，登录才能查询和查看优惠券页面
- 原因是
  - 优惠券列表要展示买卖双方的关系链，供买家判断风险
  - 保持平台的神秘性
  
### 7 图片上传的问题  


## 文档
## 1 项目交付物-20161221
- 项目全部功能因果介绍文档（包含名词定义）
- 项目的验收方案
- 项目字典表（要实时更新）  

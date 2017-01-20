/**
 * Author：pengfei
 * Create Date：2017/1/11
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */


import {mount} from "enzyme"
import React from "react"
import reducer from "../src/reducers/index"
import {createStore} from "redux"
import {expect} from 'chai';
import document from './browser'
import "./shims"
import 'document-register-element'
import {Provider} from "react-redux"
import {Page, Button,Input} from "react-onsenui"
import PublishCoupon from "../src/containers/PublishCoupon"


describe("优惠券平台整体需求功能", ()=> {
    describe("登录以后，发布优惠券", ()=> {
        let store = null
        let router = null
        let subject = null
        let state = {
            token: "123456789"
        }
        beforeEach(()=> {
            store = createStore(reducer, state)
            subject = mount(<Provider store={store}><PublishCoupon/></Provider>)
        })
        it("发布优惠券成功", ()=> {
            subject.find('Input').at(10).simulate("change", {target: {value: "星巴克test"}})
            subject.find('Input').at(11).simulate("change", {target: {value: "100000000"}})
            subject.find('Input').at(12).simulate("change", {target: {value: "10"}})
            subject.find('Input').at(13).simulate("change", {target: {value: "15"}})
            subject.find('Input').at(15).simulate("change", {target: {value: "2017-01-20"}})
            subject.find('textarea').simulate("change", {target: {value: "测试数据"}})
            subject.find(Button).simulate("submit")
            store.dispatch({type:"SHOW_DIALOG",payload:"发布成功"})
            const dialog = store.getState().dialog
            expect(dialog.msg).to.equal("发布成功")
            expect(dialog.show).to.equal(true)
        })
        it("发布优惠券失败", ()=> {

        })
    })
    describe("登录以后，查询售卖中的优惠券信息", ()=> {
        it("录入查询数据，展现数据内容及条数", ()=> {

        })
        it("下拉刷新当前展示数据（条数及内容）", ()=> {

        })
        it("上滑翻页刷新当前展示数据（条数及内容）", ()=> {

        })
        it("查看优惠券列表中的一条详细信息，展现其详细内容", ()=> {

        })
    })
    describe("查询到一条售卖的优惠券信息，购买优惠券", ()=> {
        describe("购买优惠券，生成订单", ()=> {
            it("生成订单成功", ()=> {

            })
        })
        describe("选择支付方式，完成支付", ()=> {
            it("支付成功", ()=> {

            })
            it("支付失败", ()=> {

            })
        })
    })
    describe("用户存在订单，查看订单信息", ()=> {
        it("查看用户存在的订单，展现数据条数及内容", ()=> {

        })
        it("下拉刷新当前展示数据（条数及内容）", ()=> {

        })
        it("上滑翻页刷新当前展示数据，条数及内容", ()=> {

        })
        it("查看其中一条订单数据，展现其详细内容，", ()=> {

        })
    })
    describe("用户发布过优惠券，查看其发布过的优惠券信息", ()=> {
        it("查看用户自身发布过的优惠券，展现数据条数及内容", ()=> {

        })
        it("下拉刷新当前展示数据（条数及内容）", ()=> {

        })
        it("上滑翻页刷新当前展示数据的条数及内容", ()=> {

        })
        it("查看其中一条优惠券信息，展现其详细内容", ()=> {

        })
    })
    describe("用户发布过优惠券，编辑优惠券内容", ()=> {
        it("修改原有内容后提交，提示编辑成功", ()=> {

        })
        it("修改原有内容后提交，提示编辑失败", ()=> {

        })
    })
    describe("用户发布过优惠券，下架优惠券", ()=> {
        it("下架优惠券成功", ()=> {

        })
        it("下架优惠券失败", ()=> {

        })
    })
})



/**
 * Author：liRenhao
 * Create Date：2016/12/9
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import {connect} from 'react-redux'
import {
    Page,
    Toolbar,
    List,
    ListItem,
    ListHeader,
    Button
} from 'react-onsenui'
import Login from './Login'
import User from './User'
import CreateInviteCode from './CreateInviteCode'
import ResetPassword from './ResetPassword'
import PublishedCoupons from './PublishedCoupons'
import OrderList from './OrderList'
import {
    createInviteCodeRequest,
    getUserInfoRequest,
    getUserCouponListRequest,
    getOrderListRequest,
    logoutRequest
} from '../actions'

class Mine extends React.Component {
    render() {
        return (
            <Page renderToolbar={() => (
                <Toolbar>
                    <div className='center'>个人中心</div>
                </Toolbar>
            )}>
                <List modifier='inset marginT mine'>
                    <ListHeader onClick={() =>
                        this.props.getUserInfoRequest({
                            apiType: 'getUserInfo', param: {token: this.props.token},
                            router: () => this.props.navigator.pushPage({
                                comp: User,
                                props: {key: "user"}
                            })
                        })
                    }>
                        <img src={`http://placekitten.com/g/40/40`} alt=""/>
                    </ListHeader>
                    <ListItem modifier='chevron' onClick={() =>
                        this.props.getUserInfoRequest({
                            apiType: 'getUserInfo', param: {token: this.props.token},
                            router: () => this.props.navigator.pushPage({
                                comp: User,
                                props: {key: "user"}
                            })
                        })
                    }>
                        查看用户信息
                    </ListItem>
                    <ListItem modifier='chevron' onClick={() =>
                        this.props.createInviteCodeRequest({
                            apiType: 'createInviteCode', param: {token: this.props.token},
                            router: (res) => this.props.navigator.pushPage({
                                comp: CreateInviteCode,
                                props: {key: "createInviteCode", inviteCode: res.inviteCode}
                            })
                        })
                    }>
                        生成邀请码
                    </ListItem>
                    <ListItem modifier='chevron' onClick={() =>
                        this.props.navigator.pushPage({
                            comp: ResetPassword,
                            props: {key: "resetPassword"}
                        })
                    }>
                        重置密码
                    </ListItem>
                </List>
                <List modifier='inset marginT'>
                    <ListItem modifier='chevron' onClick={() =>
                        this.props.getUserCouponListRequest({
                            apiType: 'getUserCoupons',
                            param: {...this.props.publishedCouponsPage, token: this.props.token},
                            router: () => this.props.navigator.pushPage({
                                comp: PublishedCoupons,
                                props: {key: "PublishedCoupons"}
                            })
                        })
                    }>
                        发布的优惠券
                    </ListItem>
                    <ListItem modifier='chevron' onClick={() =>
                        this.props.getOrderListRequest({
                            apiType: 'getOrderList',
                            param: {...this.props.orderPage, token: this.props.token},
                            router: () => this.props.navigator.pushPage({
                                comp: OrderList,
                                props: {key: "orderList"}
                            })
                        })
                    }>
                        购买的优惠券
                    </ListItem>
                </List>
                <Button modifier="large light marginTLR" onClick={() =>
                    this.props.logoutRequest({
                        apiType: 'logout',
                        param: {token: this.props.token},
                        router: (res) => this.props.app.resetPage({
                            comp: Login,
                            props: {key: "login", index: 2}
                        })
                    })
                }>
                    退出当前账号
                </ Button >
            </Page>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.token,
    orderPage: state.order.page,
    publishedCouponsPage: state.publishedCoupons.page
})

export default connect(mapStateToProps, {
    getUserInfoRequest,
    createInviteCodeRequest,
    getUserCouponListRequest,
    getOrderListRequest,
    logoutRequest
})(Mine)
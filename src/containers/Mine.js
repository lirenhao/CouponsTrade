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
import SellingCoupons from './SellCoupons'
import OrderList from './OrderList'
import {createInviteCodeRequest, getUserInfoRequest, getOrderListRequest, logoutRequest,getUserCouponsRequest} from '../actions'

class Mine extends React.Component {
    render() {
        return (
            <Page renderToolbar={() => (
                <Toolbar>
                    <div className='center'>个人中心</div>
                </Toolbar>
            )}>
                <List modifier='inset marginT mine'>
                    <ListHeader onClick={() => {
                        this.props.getUserInfo(this.props.token, this.props.navigator)
                    }}>
                        <img src={`http://placekitten.com/g/40/40`} alt=""/>
                    </ListHeader>
                    <ListItem modifier='chevron' onClick={() => {
                        this.props.getUserInfo(this.props.token, this.props.navigator)
                    }}>
                        查看用户信息
                    </ListItem>
                    <ListItem modifier='chevron' onClick={() =>
                        this.props.createInviteCode(this.props.token, this.props.navigator)
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
                        this.props.onGetCoupons(this.props.token,this.props.navigator,{
                            comp: SellingCoupons,
                            props: {key: "SellingCoupons"}
                        })
                    }>
                        发布的优惠券
                    </ListItem>
                    <ListItem modifier='chevron' onClick={() =>
                        this.props.getOrderList({
                            token: this.props.token,
                            ...this.props.page,
                            route: this.props.navigator,
                            com: OrderList,
                            from: "mine"
                        })
                    }>
                        购买的优惠券
                    </ListItem>
                </List>
                <Button modifier="large outline marginTLR" onClick={() => {
                    if (this.props.token == "")
                        this.props.navigator.pushPage({comp: Login, props: {key: "login", index: 2}})
                    else
                        this.props.logout(this.props.navigator, {comp: Login, props: {key: "login", index: 2}})
                }}>
                    {this.props.token == "" ? "重新登录" : "退出当前账号"}
                </ Button >
            </Page>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.token,
    page: state.order.page
});

const mapDispatchToProps = (dispatch) => ({
    getUserInfo: (token, navigator) => {
        dispatch(getUserInfoRequest({token, navigator, router: {comp: User, props: {key: "User"}}}))
    },
    createInviteCode: (token, navigator) => {
        dispatch(createInviteCodeRequest({token, navigator, comp: CreateInviteCode}))
    },
    getOrderList: (action) => {
        dispatch(getOrderListRequest(action))
    },
    logout: (navigator, router) => {
        dispatch(logoutRequest({navigator, router}))
    },
    onGetCoupons: (token, navigator, routeData)=> {
        dispatch(getUserCouponsRequest({token, navigator, routeData}))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Mine)
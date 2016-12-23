/**
 * Author：liRenhao
 * Create Date：2016/12/9
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import {
    Page,
    Toolbar,
    Button,
    List,
    ListItem,
    ListHeader
} from 'react-onsenui'
import Login from './Login'
import User from './User'
import ResetPassword from './ResetPassword'
import SellingCoupons from './SellCoupons'
import OrderList from './OrderList'
import {connect} from 'react-redux'
import {getUserInfoRequest, getOrderListRequest} from '../action'

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
                        if (this.props.token == "") {
                            this.props.navigator.pushPage({
                                comp: Login, props: {key: "Login"}
                            })
                        } else {
                            // 获取用户基本信息
                            this.props.getUserInfo(this.props.token, this.props.navigator)
                        }
                    }}>
                        <img src={`http://placekitten.com/g/40/40`} alt=""/>
                    </ListHeader>
                    <ListItem modifier='chevron'
                              onClick={() => this.props.navigator.pushPage({
                                  comp: ResetPassword,
                                  props: {key: "resetPassword"}
                              })}>
                        重置密码
                    </ListItem>
                    <ListItem modifier='chevron'
                              onClick={() => this.props.navigator.pushPage({
                                  comp: SellingCoupons,
                                  props: {key: "SellingCoupons", data: {}}
                              })}>
                        发布的优惠券
                    </ListItem>
                    <ListItem modifier='chevron'
                              onClick={() => {
                                  this.props.getOrderList(
                                      {
                                          token: 1234567890,
                                          ...this.props.page,
                                          route: this.props.navigator,
                                          com: OrderList,
                                          from: "mine"
                                      });
                              }}>
                        购买的优惠券
                    </ListItem>
                </List>
                <List modifier='inset marginT'>
                    <ListItem modifier='chevron'>
                        预留1
                    </ListItem>
                    <ListItem modifier='chevron'>
                        预留2
                    </ListItem>
                </List>
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
    getOrderList: (action) => {
        dispatch(getOrderListRequest(action))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Mine)
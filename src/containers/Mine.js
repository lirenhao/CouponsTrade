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
import ResetPassword from './InputOldPassword'
import SellingCoupons from './SellCoupons'
import PayOrder from './PayOrder'
import OrderList from './OrderList'
import {connect} from 'react-redux'
import {getOrderListRequest} from '../action'

class Mine extends React.Component {
    render() {
        return (
            <Page renderToolbar={() => (
                <Toolbar>
                    <div className='center'>个人中心</div>
                </Toolbar>
            )}>
                <List modifier='inset marginT'>
                    <ListHeader><img src={`http://placekitten.com/g/40/40`} alt=""/></ListHeader>
                    <ListItem modifier='chevron'
                              onClick={() => this.props.navigator.pushPage({
                                  comp: Login, props: {key: "Login"}
                              })}>
                        登录
                    </ListItem>
                    <ListItem modifier='chevron'
                              onClick={() => this.props.navigator.pushPage({
                                  comp: User, props: {key: "User"}
                              })}>
                        信息
                    </ListItem>
                    <ListItem modifier='chevron'
                              onClick={() => this.props.navigator.pushPage({
                                  comp: ResetPassword,
                                  props: {key: "ResetPassword"}
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
                                  this.props.dispatch(getOrderListRequest({token: 1234567890}));
                                  this.props.navigator.pushPage({
                                      comp: OrderList, props: {key: "OrderList"}
                                  })
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

export default connect()(Mine)
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
import ViewCouponDetail from './ViewCouponDetail'

class Mine extends React.Component {
    render() {
        return (
            <Page renderToolbar={() => (
                <Toolbar>
                    <div className='center'>个人中心</div>
                </Toolbar>
            )}>
                <List modifier='inset'>
                    <ListHeader/>
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
                                  comp: ViewCouponDetail,
                                  props: {key: "ViewCouponDetail"}
                              })}>
                        查看优惠券详情
                    </ListItem>
                </List>
            </Page>
        )
    }
}

export default Mine
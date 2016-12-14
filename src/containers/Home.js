/**
 * Author：liRenhao
 * Create Date：2016/12/14
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import {
    Page,
    Toolbar,
    List,
    ListItem,
    ListHeader
} from 'react-onsenui'
import PayOrder from './PayOrder'
import OrderList from './OrderList'

class Home extends React.Component {
    render() {
        return (
            <Page renderToolbar={() => (
                <Toolbar>
                    <div className='center'>首页</div>
                </Toolbar>
            )}>
                <List modifier='inset'>
                    <ListHeader/>
                    <ListItem modifier='chevron'
                              onClick={() => this.props.navigator.pushPage({
                                  comp: PayOrder, props: {key: "payOrder"}
                              })}>
                        购买
                    </ListItem>
                    <ListItem modifier='chevron'
                              onClick={() => this.props.navigator.pushPage({
                                  comp: OrderList, props: {key: "OrderList"}
                              })}>
                        查看订单
                    </ListItem>
                </List>
            </Page>
        )
    }
}

export default Home
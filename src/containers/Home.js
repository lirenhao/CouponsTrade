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
  Toolbar
} from 'react-onsenui'

import QueryCoupons from './QueryCoupons'

class Home extends React.Component {
  render() {
    return (
      <Page renderToolbar={() => (
        <Toolbar>
          <div className="center">首页</div>
        </Toolbar>
      )}>
        <QueryCoupons navigator={this.props.navigator}/>
      </Page>
    )
  }
}

export default Home
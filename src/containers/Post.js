/**
 * Author：liRenhao
 * Create Date：2016/12/26
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from "react";
import {Page, Toolbar} from "react-onsenui";
import PublishCoupon from "./PublishCoupon";

class Post extends React.Component {
  render() {
    return (
      <Page key="post" renderToolbar={() => (
        <Toolbar>
          <div className='center'>发布</div>
        </Toolbar>
      )}>
        <PublishCoupon navigator={this.props.navigator }/>
      </Page>
    )
  }
}

export default Post
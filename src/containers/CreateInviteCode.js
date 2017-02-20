/**
 * Author：liRenhao
 * Create Date：2016/12/26
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from "react";
import {Page, Toolbar, BackButton} from "react-onsenui";
import InviteCode from "../components/InviteCode";

const CreateInviteCode = (props) => {
  return (
    <Page renderToolbar={() => (
      <Toolbar>
        <div className='left'><BackButton/></div>
        <div className='center'>生成邀请码</div>
      </Toolbar>
    )}>
      <InviteCode inviteCode={props.inviteCode}/>
    </Page>
  )
}

export default CreateInviteCode
/**
 * Author：likon
 * Create Date：2016/12/12
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 原密码容器
 */ 
import React from 'react'
import {Page,Toolbar,BackButton} from 'react-onsenui'
import Oldpassword from '../components/OldPassword'

class InputOldPassword extends React.Component{
    resetToolbar(){
        return (
            <Toolbar>
                <div className="left">
                    <BackButton/>
                </div>
                <div className='center'>原密码</div>
            </Toolbar>
        )
    }
    render(){
        return(
            <Page renderToolbar={this.resetToolbar.bind(this)}>
                <Oldpassword onSubmit={(value)=>this.props.navigator.popPage()} />
            </Page>
        )
    }

}

export default InputOldPassword





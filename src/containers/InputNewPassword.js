/**
 * Author：likon
 * Create Date：2016/12/15
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 新密码容器
 */
import React from 'react'
import {Page,Toolbar,BackButton} from 'react-onsenui'
import NewPassword from '../components/NewPassword'
import Main from './Mine'

class InputNewPassword extends React.Component{
    resetToolbar(){
        return (
            <Toolbar>
                <div className="left">
                    <BackButton/>
                </div>
                <div className='center'>新密码</div>
            </Toolbar>
        )
    }
    render(){
        return(
            <Page renderToolbar={this.resetToolbar.bind(this)}>
                <NewPassword onSubmit={() =>this.props.navigator.pushPage({
                    comp: Main, props: {key: "Main" }
                })} />
            </Page>
        )
    }

}

export default InputNewPassword
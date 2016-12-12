/**
 * Author：liRenhao
 * Create Date：2016/12/9
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 测试导航
 */
import React from 'react'
import {Page, Toolbar, BackButton, Button} from 'react-onsenui'
import UserShow from '../components/UserShow'
import UserEdit from '../components/UserEdit'
import InviteCode from "../components/InviteCode"

const Edit = (props) => {
    return (
        <Page renderToolbar={() => (
            <Toolbar>
                <div className='left'><BackButton/></div>
                <div className='center'>编辑个人信息</div>
            </Toolbar>
        )}>
            <UserEdit onSubmit={props.onSubmit} initialValues={props.user}/>
        </Page>
    )
}

const Share = (props) => {
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

class User extends React.Component {
    render() {
        return (
            <Page renderToolbar={() => (
                <Toolbar>
                    <div className='left'><BackButton/></div>
                    <div className='center'>个人中心</div>
                </Toolbar>
            )}>
                <UserShow
                    edit={() => this.props.navigator.pushPage({
                        comp: Edit,
                        props: {
                            key: "userEdit",
                            onSubmit: (value) => console.log(value),
                            user: {nickname: "昵称", phoneNumber: "18310809129", inviteCode: "ABCD1234ef"}
                        }
                    })}
                    share={() => this.props.navigator.pushPage({
                        comp: Share,
                        props: {
                            key: "userShare",
                            inviteCode: "ABCD1234ef"
                        }
                    })}
                    user={{nickname: "昵称", phoneNumber: "18310809129", inviteCode: "ABCD1234ef"}}
                />
            </Page>
        )
    }
}

export default User


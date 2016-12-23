/**
 * Author：liRenhao
 * Create Date：2016/12/9
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 用戶信息界面
 */
import React from "react";
import {connect} from "react-redux";
import {Page, Toolbar, BackButton, Button} from "react-onsenui";
import {updateUserInfoRequest, createInviteCodeRequest} from "../action";
import UserShow from "../components/UserShow";
import UserEdit from "../components/UserEdit";
import InviteCode from "../components/InviteCode";

const Edit = (props) => {
    return (
        <Page renderToolbar={() => (
            <Toolbar>
                <div className='left'><BackButton/></div>
                <div className='center'>编辑个人信息</div>
            </Toolbar>
        )}>
            <UserEdit onSubmit={props.userEdit} initialValues={props.user}/>
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
                    <div className='center'>个人信息</div>
                </Toolbar>
            )}>
                <UserShow
                    edit={() => this.props.navigator.pushPage({
                        comp: Edit,
                        props: {
                            key: 'userEdit',
                            user: this.props.userInfo,
                            userEdit: (param) => {
                                this.props.updateUserInfo({...param, token: this.props.token}, this.props.navigator)
                            }
                        }
                    })}
                    share={() => this.props.createInviteCode(this.props.navigator)}
                    user={this.props.userInfo}
                />
            </Page>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.token,
    userInfo: state.userInfo
})

const mapDispatchToProps = (dispatch) => ({
    updateUserInfo: (param, navigator) => {
        dispatch(updateUserInfoRequest({param, navigator}))
    },
    createInviteCode: (navigator) => {
        dispatch(createInviteCodeRequest({navigator, router: {comp: Share, props: {key: "userShare"}}}))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(User)


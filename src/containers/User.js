/**
 * Author：liRenhao
 * Create Date：2016/12/9
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 用戶信息界面
 */
import React from "react";
import {connect} from "react-redux";
import {
    Splitter,
    SplitterSide,
    SplitterContent,
    List,
    ListItem,
    Page,
    Toolbar,
    BackButton,
    ToolbarButton,
    Icon,
    Button
} from "react-onsenui";
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
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    hide() {
        this.setState({isOpen: false})
    }

    show() {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <Page>
                <Splitter>
                    <SplitterSide
                        side='right'
                        width={200}
                        collapse={true}
                        isSwipeable={true}
                        isOpen={this.state.isOpen}
                        onClose={this.hide.bind(this)}
                        onOpen={this.show.bind(this)}
                    >
                        <Page>
                            <List>
                                <ListItem appable>信息编辑</ListItem>
                                <ListItem appable>重置密码</ListItem>
                                <ListItem appable>生成邀请码</ListItem>
                            </List>
                        </Page>
                    </SplitterSide>
                    <SplitterContent>
                        <Page renderToolbar={() => (
                            <Toolbar>
                                <div className='left'><BackButton/></div>
                                <div className='center'>个人信息</div>
                                <div className='right'>
                                    <ToolbarButton onClick={this.show.bind(this)}>
                                        <Icon icon='md-menu'/>
                                    </ToolbarButton>
                                </div>
                            </Toolbar>
                        )}>
                            <UserShow
                                edit={() => this.props.navigator.pushPage({
                                    comp: Edit,
                                    props: {
                                        key: 'userEdit',
                                        user: this.props.userInfo,
                                        userEdit: (param) => {
                                            this.props.updateUserInfo({
                                                ...param,
                                                token: this.props.token
                                            }, this.props.navigator)
                                        }
                                    }
                                })}
                                share={() => this.props.createInviteCode(this.props.token, this.props.navigator)}
                                user={this.props.userInfo}
                            />
                        </Page>
                    </SplitterContent>
                </Splitter>
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
    createInviteCode: (token, navigator) => {
        dispatch(createInviteCodeRequest({token, navigator, comp: Share}))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(User)


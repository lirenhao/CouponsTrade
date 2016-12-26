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
import {updateUserInfoRequest} from "../action";
import UserShow from "../components/UserShow";
import UserEdit from "../components/UserEdit";

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

class User extends React.Component {
    render() {
        return (
            <Page renderToolbar={() => (
                <Toolbar>
                    <div className='left'><BackButton/></div>
                    <div className='center'>个人信息</div>
                </Toolbar>
            )}>
                <UserShow user={this.props.userInfo}/>
                <Button modifier="large marginTLR" onClick={() =>
                    this.props.navigator.pushPage({
                        comp: Edit,
                        props: {
                            key: 'userEdit',
                            user: this.props.userInfo,
                            userEdit: (param) => {
                                this.props.updateUserInfo(
                                    {...param, token: this.props.token},
                                    this.props.navigator
                                )
                            }
                        }
                    })}>
                    编辑信息
                </ Button >
            </ Page >
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(User)


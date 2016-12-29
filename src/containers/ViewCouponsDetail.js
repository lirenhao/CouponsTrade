/**
 * Author：likon
 * Create Date：2016/12/13
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 首页优惠券列表中查看优惠券详细信息容器
 */

import React from 'react'
import {Page, Toolbar, BackButton, BottomToolbar, Button} from 'react-onsenui'
import CouponDetail from '../components/CouponDetail'
import PayOrder from './PayOrder'
import {connect} from 'react-redux'

class ViewCouponsDetail extends React.Component {

    render() {
        return (
            <Page renderToolbar={() => (
                <Toolbar>
                    <div className='left'>
                        <BackButton/>
                    </div>
                    <div className='center'>优惠券详细信息</div>
                </Toolbar>
            )} renderBottomToolbar={() => (
                <BottomToolbar>
                    <Button modifier="large noRadius" type="submit" onClick={() => this.props.navigator.pushPage({
                        comp: PayOrder, props: {key: "PayOrder"}
                    })}>我要买</Button>
                </BottomToolbar>
            )}>
                <CouponDetail
                    DetailInformation={this.props.DetailInformation}>
                </CouponDetail>
            </Page>
        )
    }
}


const mapStateToProps = (state)=>(
{
    DetailInformation: state.couponInfo
}
)


export default connect(mapStateToProps)(ViewCouponsDetail) 

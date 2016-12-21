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

class ViewCouponsDetail extends React.Component {

    render() {
        // const {navigator} = props;
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
                    DetailInformation={{
                        applyCity: "该券仅适用北京",
                        nickname: "small_cat",
                        originalPrice: "￥50",
                        sellingPrice: "￥70",
                        couponName: "西提厚牛排优惠券",
                        isAutomaticRefund: "是",
                        couponType: "西餐",
                        ticketPrice: "￥100",
                        effectiveDate: "至2016年12月28日",
                        //merchantPicture: "无",
                        describe: "请各位小主们尽快下单吧~~"
                    }}>
                </CouponDetail>
            </Page>
        )
    }
}

export default  ViewCouponsDetail
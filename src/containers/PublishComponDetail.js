/**
 * Author：likon
 * Create Date：2016/12/14
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 发布优惠券列表中查看优惠券详情容器
 */
import React from 'react'
import {Page, Toolbar, BackButton,SpeedDial,Fab,Icon,SpeedDialItem} from 'react-onsenui'
import CouponDetail from '../components/CouponDetail'

class ViewCouponDetail extends React.Component {
    render() {
        return (
            <Page renderToolbar={() => (
                <Toolbar>
                    <div className='left'>
                        <BackButton/>
                    </div>

                    <div className='center'>优惠券详细信息</div>
                </Toolbar>
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
                        <SpeedDial position='bottom right'>
                            <Fab>
                                <Icon icon='md-menu'/>
                            </Fab>
                            <SpeedDialItem onClick=
                                               {() => {}}>
                                <Icon icon='md-share'/>
                            </SpeedDialItem>
                            <SpeedDialItem onClick=
                                           {() => {}}>
                                <Icon icon='md-edit'/>
                            </SpeedDialItem>
                        </SpeedDial>
                    </CouponDetail>
            </Page>
        )
    }
}

export default  ViewCouponDetail
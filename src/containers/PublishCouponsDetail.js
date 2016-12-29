/**
 * Author：likon
 * Create Date：2016/12/14
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 发布优惠券列表中查看优惠券详情容器
 */
import React from 'react'
import {Page, Toolbar, BackButton, Button, BottomToolbar} from 'react-onsenui'
import CouponDetail from '../components/CouponDetail'
import EditCoupons from './EditCoupon'
import {connect}  from 'react-redux'
import {soldOutCouponRequest,editUserCouponRequest} from  '../action'

class PublishCouponsDetail extends React.Component {
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
                <div className="tab-bar">
                    <div className="tab-bar__item">
                        <button className="tab-bar__button" type="submit"
                                onClick={() => this.props.navigator.replacePage({
                                    comp: EditCoupons, props: {key: "EditCoupons"}
                                })}>编辑
                        </button>
                    </div>
                    <div className="tab-bar__item">
                        <button className="tab-bar__button" type="submit"
                                onClick={() => this.props.navigator.popPage()
                                }>下架
                        </button>
                    </div>
                </div>
            )}>
                <CouponDetail
                    DetailInformation={this.props.couponInfo}>
                </CouponDetail>
            </Page>
        )
    }
}

const mapStateToProps = (state)=>(
{couponInfo: state.publishedCoupons.couponInfo}
)

const mapDispatchToProps =(dispatch)=>(
{
    onEditCoupon:(id,navigator,routeData)=>{
        dispatch(editUserCouponRequest({id,navigator,routeData:{
            comp: EditCoupons, props: {key: "EditCoupons"}
        }}))
    },
    onSoldOutCoupon:(id,navigator)=>{
        dispatch(soldOutCouponRequest({id,navigator}))
    }
}
)

export default connect(mapStateToProps,mapDispatchToProps)(PublishCouponsDetail)
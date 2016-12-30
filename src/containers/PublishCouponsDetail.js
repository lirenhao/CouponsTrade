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
import {soldOutCouponRequest} from  '../actions'

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
                                onClick={() => this.props.onEditCoupon(this.props.token,this.props.couponInfo.id, this.props.navigator)
                                }>编辑
                        </button>
                    </div>
                    <div className="tab-bar__item">
                        <button className="tab-bar__button" type="submit"
                                onClick={() => this.props.onSoldOutCoupon(this.props.token, this.props.couponInfo.id, this.props.navigator)
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
{
    couponInfo: state.publishedCoupons.couponInfo,
    token: state.token
}
)

const mapDispatchToProps = (dispatch)=>(
{
    onEditCoupon: (token, id, navigator)=> {
        dispatch(soldOutCouponRequest({
            token, id, navigator, routeData: {
                comp: EditCoupons, props: {key: "EditCoupons"}
            }
        }))
    },
    onSoldOutCoupon: (token, id, navigator)=> {
        dispatch(soldOutCouponRequest({token, id, navigator}))
    }
}
)

export default connect(mapStateToProps, mapDispatchToProps)(PublishCouponsDetail)
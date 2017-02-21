/**
 * Author：likon
 * Create Date：2016/12/14
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 发布优惠券列表中查看优惠券详情容器
 */
import React from 'react'
import {Page, Toolbar, BackButton} from 'react-onsenui'
import CouponInfo from '../components/CouponInfo'
import EditCoupons from './EditCoupon'
import {connect}  from 'react-redux'
import {soldOutCouponRequest} from  '../actions'
import {couponStateDic} from '../constants/dataDic'
import Button from '../components/common/Button'

class PublishCouponsDetail extends React.Component {
  render() {
    const isDisabled = this.props.couponInfo.couponState !== couponStateDic.PUBLISHED
    return (
      <Page renderToolbar={() => (
        <Toolbar>
          <div className='left'>
            <BackButton/>
          </div>
          <div className='center'>优惠券详细信息</div>
        </Toolbar>
      )}>
        <CouponInfo
          couponInfo={this.props.couponInfo}>
        </CouponInfo>
        <div className="button-bar btntab">
          <Button disabled={isDisabled}
                  onClick={() => this.props.soldOutCouponRequest(
                    {
                      apiType: 'soldOutCoupon',
                      param: {id: this.props.couponInfo.id, token: this.props.token},
                      router: () => this.props.navigator.replacePage({
                        comp: EditCoupons,
                        props: {key: "EditCoupons"}
                      })
                    }
                  )}
                  type="submit"
          >编辑</Button>
          <Button disabled={isDisabled}
                  onClick={() => this.props.soldOutCouponRequest(
                    {
                      apiType: 'soldOutCoupon',
                      param: {id: this.props.couponInfo.id, token: this.props.token},
                      router: () => this.props.navigator.popPage()
                    }
                  )}
                  type="submit"
          >下架</Button>
        </div>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  couponInfo: state.publishedCoupons.couponInfo,
  token: state.token
})

export default connect(mapStateToProps, {soldOutCouponRequest})(PublishCouponsDetail)
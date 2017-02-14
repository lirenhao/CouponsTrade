/**
 * Author：likon
 * Create Date：2016/12/12
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 查看优惠券的详细信息组件
 */

import React from 'react'
import * as Ons from 'react-onsenui'
import {couponStateMap, couponTypeMap} from '../constants/dataDic'

const CouponInfo = (props) => {
    const {couponInfo}=props
    return (
        <div>
            <Ons.List modifier="inset marginT title">
                <Ons.ListItem>
                    <div className="left">
                        <img className='list__item__thumbnail' src={`http://placekitten.com/g/40/40`} alt="用户头像"/>
                    </div>
                    <div className="center">{couponInfo.nickname}</div>
                    <div className="right">
                        <div className="list__item__title">
                            <div>￥{couponInfo.sellingPrice}</div>
                        </div>
                        <div className="list__item__subtitle">
                            <div>￥{couponInfo.ticketPrice}</div>
                        </div>
                    </div>
                </Ons.ListItem>
            </Ons.List>
            <Ons.List modifier="inset marginT">
                <Ons.ListItem>
                    <div className="center">优惠券名称</div>
                    <div className="right">{couponInfo.couponName}</div>
                </Ons.ListItem>
                <Ons.ListItem>
                    <div className="center">可自动退货</div>
                    <div className="right">{ couponInfo.isAutomaticRefund === true ? "是" : "否"}</div>
                </Ons.ListItem>
                <Ons.ListItem>
                    <div className="center">优惠券类别</div>
                    <div className="right">{couponTypeMap[couponInfo.couponType]}</div>
                </Ons.ListItem>
                <Ons.ListItem>
                    <div className="center">优惠券状态</div>
                    <div className="right">{couponStateMap[couponInfo.couponState]}</div>
                </Ons.ListItem>
                <Ons.ListItem>
                    <div className="center">截止日期</div>
                    <div className="right">{couponInfo.endDate}</div>
                </Ons.ListItem>
                <Ons.ListItem>
                    <div className="center">优惠券相关图片</div>
                    <div className="right"></div>
                </Ons.ListItem>
                <Ons.ListItem>
                    <div className="center">
                        <div className="list__item__title">优惠券描述</div>
                        <div className="list__item__subtitle grayColor">{couponInfo.describe}</div>
                    </div>
                </Ons.ListItem>
            </Ons.List>
            <div>
                {props.children}
            </div>
        </div>
    )
}

CouponInfo.propTypes = {
    couponInfo: React.PropTypes.shape({
        nickname: React.PropTypes.string.isRequired,
        originalPrice: React.PropTypes.number.isRequired,
        sellingPrice: React.PropTypes.number.isRequired,
        couponName: React.PropTypes.string.isRequired,
        isAutomaticRefund: React.PropTypes.bool.isRequired,
        couponType: React.PropTypes.string.isRequired,
        ticketPrice: React.PropTypes.number.isRequired,
        endDate: React.PropTypes.string.isRequired,
        //picture:React.PropTypes.string.isRequired,
        describe: React.PropTypes.string.isRequired
    }).isRequired
}

export default CouponInfo
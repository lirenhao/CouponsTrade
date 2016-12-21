/**
 * Author：likon
 * Create Date：2016/12/12
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 查看优惠券的详细信息组件
 */

import React from 'react'
import {List, ListItem} from 'react-onsenui'



const CouponDetail = (props) => {
    const {DetailInformation}=props;
    return (
        <div>
            <List modifier="inset marginT">
                <ListItem>
                    <div className="left">
                        <img className='list__item__thumbnail' src={`http://placekitten.com/g/40/40`} alt="商品图片"/>
                    </div>
                    <div className="center">
                        <div className="list__item__title">{DetailInformation.nickname}</div>
                        <div className="list__item__subtitle">{DetailInformation.applyCity}</div>
                    </div>
                    <div className="right">
                        <div className="list__item__title">{DetailInformation.originalPrice}</div>
                        <div className="list__item__subtitle">{DetailInformation.sellingPrice}</div>
                    </div>
                </ListItem>
            </List>
            <List modifier="inset marginT">
                <ListItem>
                    <div className="center">优惠券名称</div>
                    <div className="right">{DetailInformation.couponName}</div>
                </ListItem>
                <ListItem>
                    <div className="center">可自动退款</div>
                    <div className="right">{DetailInformation.isAutomaticRefund}</div>
                </ListItem>
                <ListItem>
                    <div className="center">优惠券类别</div>
                    <div className="right">{DetailInformation.couponType}</div>
                </ListItem>
                <ListItem>
                    <div className="center">优惠券面值</div>
                    <div className="right">{DetailInformation.ticketPrice}</div>
                </ListItem>
                <ListItem>
                    <div className="center">截止日期</div>
                    <div className="right">{DetailInformation.effectiveDate}</div>
                </ListItem>
                <ListItem>
                    <div className="center">优惠券图片</div>
                    <div className="right"></div>
                </ListItem>
                <ListItem>
                    <div className="center">
                        <div className="list__item__title">优惠券详情</div>
                        <div className="list__item__subtitle">{DetailInformation.describe}</div>
                    </div>
                </ListItem>
            </List>
            <div>
                {props.children}
            </div>
        </div>
    )
};

CouponDetail.propTypes = {
    DetailInformation: React.PropTypes.shape({
        applyCity: React.PropTypes.string.isRequired,
        nickname: React.PropTypes.string.isRequired,
        originalPrice: React.PropTypes.string.isRequired,
        sellingPrice: React.PropTypes.string.isRequired,
        couponName: React.PropTypes.string.isRequired,
        isAutomaticRefund: React.PropTypes.string.isRequired,
        couponType: React.PropTypes.string.isRequired,
        ticketPrice: React.PropTypes.string.isRequired,
        effectiveDate: React.PropTypes.string.isRequired,
        //merchantPicture:React.PropTypes.string.isRequired,
        describe: React.PropTypes.string.isRequired
    }).isRequired
};

export default CouponDetail






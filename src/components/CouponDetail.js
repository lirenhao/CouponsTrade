/**
 * Author：likon
 * Create Date：2016/12/12
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 查看优惠券的详细信息组件
 */

import React from 'react'
import {Page,Row,Col} from 'react-onsenui'

const styles={
    sellingPrice:{
        color:'#FF0000',
        fontWeight:'900'
    },
    originalPrice:{
        textDecoration:'line-through',
        color:'#bbb',
        fontSize:'14px'
    },
    content:{
        margin: '20px 0 0px 0'
    }
}

const CouponDetail=(props)=>{
    const {DetailInformation}=props
    return (
        <Page>
            <div className="list">
                <li className="list__item">
                    <div className="list__item__center">
                        <div className="list__item__title">{DetailInformation.nickname}</div>
                        <div className="list__item__subtitle">{DetailInformation.applyCity}</div>
                    </div>
                    <div className="list__item__right">
                        <div className="list__item__title" style={styles.originalPrice}>{DetailInformation.originalPrice}</div>
                        <div className="list__item__subtitle" style={styles.sellingPrice}>{DetailInformation.sellingPrice}</div>
                    </div>
                </li>
            </div>
            <div style={styles.content}>
                <ul className="list">
                    <li className="list__item">
                        <div className="list__item__center">优惠券名称</div>
                        <div className="list__item__right">{DetailInformation.CouponName}</div>
                    </li>
                    <li className="list__item">
                        <div className="list__item__center">可自动退款</div>
                        <div className="list__item__right">{DetailInformation.IsAutomaticRefund}</div>
                    </li>
                    <li className="list__item">
                        <div className="list__item__center">优惠券类别</div>
                        <div className="list__item__right">{DetailInformation.CouponType}</div>
                    </li>
                    <li className="list__item">
                        <div className="list__item__center">优惠券面值</div>
                        <div className="list__item__right">{DetailInformation.TicketPrice}</div>
                    </li>
                    <li className="list__item">
                        <div className="list__item__center">有效期区间</div>
                        <div className="list__item__right">{DetailInformation.EffectiveDate}</div>
                    </li>
                    <li className="list__item">
                        <div className="list__item__center">优惠券图片</div>
                        <div className="list__item__right">{DetailInformation.MerchantPicture}</div>
                    </li>
                    <li className="list__item">
                        <div className="list__item__center">
                            <div className="list__item__title">优惠券详情</div>
                            <div className="list__item__subtitle">{DetailInformation.desc}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </Page>
    )
}

CouponDetail.propTypes={
    DetailInformation:React.PropTypes.shape({
        applyCity:React.PropTypes.string.isRequired,
        nickname:React.PropTypes.string.isRequired,
        originalPrice:React.PropTypes.string.isRequired,
        sellingPrice:React.PropTypes.string.isRequired,
        IsAutomaticRefund:React.PropTypes.string.isRequired,
        CouponType:React.PropTypes.string.isRequired,
        CouponName:React.PropTypes.string.isRequired,
        TicketPrice:React.PropTypes.string.isRequired,
        EffectiveDate:React.PropTypes.string.isRequired,
        MerchantPicture:React.PropTypes.string.isRequired,
        desc:React.PropTypes.string.isRequired
    }).isRequired
}

export default CouponDetail






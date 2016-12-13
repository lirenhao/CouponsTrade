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
        fontSize:'20px'
    },
    originalPrice:{
        textDecoration:'line-through',
        color:'#bbb',
        fontSize:'12px'
    },
    content:{
        margin: '20px 0 0px 0'
    }
}

const CouponDetail=(props)=>{
    const {DetailInformation}=props
    return (
        <Page>
            <div>
                <Row className="list">
                    <Col className="list__item">
                        <div className="list__item__left">

                            <div className="list__item__center">
                                <div className="list__item__title">{DetailInformation.nickname}</div>
                                <div className="list__item__subtitle">{DetailInformation.applyCity}</div>
                            </div>
                            <div className="list__item__right">
                                <div className="list__item__title" style={styles.originalPrice}>{DetailInformation.originalPrice}</div>
                                <div className="list__item__subtitle" style={styles.sellingPrice}>{DetailInformation.sellingPrice}</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div style={styles.content}>
                <Row className="list">
                    <Col className="list__item">优惠券名称</Col>
                    <Col className="list__item">
                        {DetailInformation.CouponName}
                    </Col>
                </Row>
                <Row>
                    <Col  className="list__item">是否支持优惠券未开启时自动退款</Col>
                    <Col className="list__item">
                        {DetailInformation.IsAutomaticRefund}
                    </Col>
                </Row>
                <Row>
                    <Col  className="list__item">优惠券类别</Col>
                    <Col className="list__item">
                        {DetailInformation.CouponType}
                    </Col>
                </Row>
                <Row>
                    <Col  className="list__item">券面值</Col>
                    <Col className="list__item">
                        {DetailInformation.TicketPrice}
                    </Col>
                </Row>
                <Row>
                    <Col  className="list__item">有效期区间</Col>
                    <Col className="list__item">
                        {DetailInformation.EffectiveDate}
                    </Col>
                </Row>
                <Row>
                    <Col  className="list__item">商户图片</Col>
                    <Col className="list__item">
                        {DetailInformation.MerchantPicture}
                    </Col>
                </Row>
                <Row>
                    <Col  className="list__item">描述</Col>
                    <Col className="list__item">
                        {DetailInformation.desc}
                    </Col>
                </Row>
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






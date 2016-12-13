/**
 * Author：likon
 * Create Date：2016/12/12
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 查看优惠券的详细信息组件
 */

import React from 'react'
import {Page,Row,Col} from 'react-onsenui'

const CouponDetail=(props)=>{
    const {DetailInformation}=props
    return (
        <Page>
            <div>
                <Row>
                    <Col>卖家昵称</Col>
                    <Col>
                        {DetailInformation.nickname}
                    </Col>
                </Row>
                <Row>
                    <Col>优惠券名称</Col>
                    <Col>
                        {DetailInformation.CouponName}
                    </Col>
                </Row>
                <Row>
                    <Col>价格</Col>
                    <Col>
                        {DetailInformation.price}
                    </Col>
                </Row>
                <Row>
                    <Col>描述</Col>
                    <Col>
                        {DetailInformation.desc}
                    </Col>
                </Row>
            </div>
        </Page>
    )
}

CouponDetail.propTypes={
    DetailInformation:React.PropTypes.shape({
        nickname:React.PropTypes.string.isRequired,
        CouponName:React.PropTypes.string.isRequired,
        price:React.PropTypes.string.isRequired,
        desc:React.PropTypes.string.isRequired
    }).isRequired
}

export default CouponDetail




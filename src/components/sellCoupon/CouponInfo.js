/**
 * Author：pengfei
 * Create Date：2016/12/14
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */

import React from 'react'
import {ListItem} from 'react-onsenui'
import PriceComponent from './Price'

const CouponInfo = (props)=> {
    const {couponName, sellingPrice, description, onClick} = props;
    return (
        <ListItem modifier='chevron' onClick={onClick}>
            <div className='left'>
                <img className="list__item__thumbnail" src="http://placekitten.com/g/40/40" alt="Cute kitten"/>
            </div>
            <div className='center'>
                <div className="list__item__title">{couponName}</div>
                <b>退</b>
                <div className="list__item__subtitle">{description}</div>
            </div>
            <div className='right'>
                <PriceComponent {...{text: "价格", price: sellingPrice}}/>
            </div>
        </ListItem>
    )
};

CouponInfo.propTypes = {
    couponName: React.PropTypes.string.isRequired,
    sellingPrice: React.PropTypes.number.isRequired,
    description: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default CouponInfo
/**
 * Author：pengfei
 * Create Date：2016/12/14
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */

import React from 'react'
import {ListItem} from 'react-onsenui'
import PriceComponent from '../Price'

const CouponInfo = (props)=> {
    const {couponName, sellingPrice, describe, onClick} = props;
    return (
        <ListItem modifier='chevron sell' onClick={onClick}>
            <div className='left'>
                <img className="list__item__thumbnail" src="http://placekitten.com/g/40/40" alt="Cute kitten"/>
            </div>
            <div className='center'>
                <div className="list__item__title">{couponName}</div>
                <em>限</em><i>稀</i><b>退</b>
                <div className="list__item__subtitle">{describe}</div>
            </div>
            <div className='right price'>
                <PriceComponent price={sellingPrice}/>
            </div>
        </ListItem>
    )
}

CouponInfo.propTypes = {
    couponName: React.PropTypes.string.isRequired,
    sellingPrice: React.PropTypes.number.isRequired,
    describe: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
}

export default CouponInfo
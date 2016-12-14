/**
 * Author：pengfei
 * Create Date：2016/12/14
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */

import React from 'react'
import {ListItem} from 'react-onsenui'
import PriseComponent from './Prise'

const GoodsInfo = (props)=> {
    const {goodsTitle, newPrise, description, onClick} = props;
    return (
        <ListItem modifier='chevron' onClick={onClick}>
            <div className='left'>
                {goodsTitle}
            </div>

            <div className='center'>
                {description}
            </div>
            <div className='right'>
                <PriseComponent {...{text: "价格", newPrise: newPrise}}/>
            </div>
        </ListItem>
    )
};

GoodsInfo.propTypes = {
    goodsTitle: React.PropTypes.string.isRequired,
    newPrise: React.PropTypes.number.isRequired,
    description: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default GoodsInfo
/**
 * Created by ALIENWARE17 on 2016/12/13.
 */
import React, {PropTypes} from 'react'
import {} from 'react-onsenui'

const ItemInfo = ({item, price}) => {
    return (
        <div style={{margin: "20px 0"}}>
            <img alt="图片"/>
            <span style={{float: "right", paddingRight: "20px"}}>{item + price}元</span>
        </div>
    )
};

ItemInfo.propTypes = {
    item: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default ItemInfo
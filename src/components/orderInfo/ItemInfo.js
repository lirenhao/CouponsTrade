/**
 * Author：Yky
 * Create Date：2016/12/13
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示商品信息的组件
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
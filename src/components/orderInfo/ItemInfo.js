/**
 * Author：Yky
 * Create Date：2016/12/13
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示优惠券信息的组件
 */
import React, {PropTypes} from 'react'
import {List, ListItem, ListHeader} from 'react-onsenui'

const ItemInfo = ({item, price}) => {
  return (
    <List modifier="pay" renderHeader={() => <ListHeader>优惠券信息</ListHeader>}>
      <ListItem>
        <div className='left'>
          <img src={`http://placekitten.com/g/40/40`} alt="图片" className='list__item__thumbnail'/>
        </div>
        <div className='center'>
          {item}
        </div>
        <div className="right price">{price + "元"}</div>
      </ListItem>
    </List>
  )
}

ItemInfo.propTypes = {
  item: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
}

export default ItemInfo
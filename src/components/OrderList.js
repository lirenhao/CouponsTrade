/**
 * Author：liRenhao
 * Create Date：2017/2/14
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import * as Ons from 'react-onsenui'

const OrderList = (props) => {
    return (
        <Ons.List
            modifier='order'
            dataSource={props.orderList}
            renderRow={(row, index) => (
                <Ons.ListItem key={index} onClick={props.getOrderInfo}>
                    <div className='left'>
                        <img src={`http://placekitten.com/g/${40 + index}/${40 + index}`}
                             alt='图片' className='list__item__thumbnail'/>
                    </div>
                    <div className='center'>
                        <div className='list__item__title'>{row.couponName}</div>
                        <div className='list__item__subtitle'>{row.sellingPrice + '元'}</div>
                    </div>
                    <div className='right grayColor'>
                        {row.orderState}
                    </div>
                </Ons.ListItem>
            )}
        />
    )
}

OrderList.propTypes = {
    orderList: React.PropTypes.array.isRequired,
    getOrderInfo: React.PropTypes.func.isRequired
}

export default OrderList
/**
 * Author：pengfei
 * Create Date：2016/12/13
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 发售中的商品列表
 */
import React from 'react'
import * as Ons from 'react-onsenui'

const CouponList = ({couponList, onClickPushPage}) => {
  return (
    <Ons.List dataSource={couponList} renderRow={(row) => (
      <Ons.ListItem modifier='chevron sell' onClick={() => onClickPushPage(row.id)}>
        <div className='left'>
          <img className="list__item__thumbnail" src="http://placekitten.com/g/40/40" alt="Cute kitten"/>
        </div>
        <div className='center'>
          <div className="list__item__title">{row.couponName}</div>
          <em>限</em><i>稀</i><b>退</b>
          <div className="list__item__subtitle">{row.describe}</div>
        </div>
        <div className='right price'>
          <div>￥{row.sellingPrice}</div>
        </div>
      </Ons.ListItem>
    )}/>
  )
}

CouponList.propTypes = {
  couponList: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      couponName: React.PropTypes.string.isRequired,
      sellingPrice: React.PropTypes.number.isRequired,
      describe: React.PropTypes.string.isRequired
    })).isRequired,
  onClickPushPage: React.PropTypes.func.isRequired
}

export default CouponList
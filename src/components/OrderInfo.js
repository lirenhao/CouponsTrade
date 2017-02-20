/**
 * Author：liRenhao
 * Create Date：2017/2/14
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import * as Ons from 'react-onsenui'

const OrderInfo = (props) => {
  const {
    orderNo, orderDate, orderTime, id, couponName, isAutomaticRefund,
    couponType, couponModality, couponCode, sellingPrice, originalPrice,
    ticketPrice, endDate, describe, sellerNickName, orderState
  } = props.orderInfo

  return (
    <div>
      <Ons.List modifier="inset marginT">
        <Ons.ListItem>
          <div className="left">
            <img className='list__item__thumbnail'
                 src={`http://placekitten.com/g/40/40`}
                 alt="商品图片"/>
          </div>
          <div className="center">{couponName}</div>
          <div className="right"><span className="price">{sellingPrice + "元"}</span></div>
        </Ons.ListItem>
      </Ons.List>
      <Ons.List modifier="inset marginT">
        <Ons.ListItem>卖家昵称
          <div className="right">{sellerNickName}</div>
        </Ons.ListItem>
        <Ons.ListItem>优惠券ID
          <div className="right">{id}</div>
        </Ons.ListItem>
        <Ons.ListItem>可自动退货
          <div className="right">{isAutomaticRefund ? "是" : "否"}</div>
        </Ons.ListItem>
        <Ons.ListItem>优惠券类别
          <div className="right">{couponType}</div>
        </Ons.ListItem>
        <Ons.ListItem>券码形式
          <div className="right">{couponModality}</div>
        </Ons.ListItem>
        <Ons.ListItem>券码
          <div className="right">{couponCode}</div>
        </Ons.ListItem>
        <Ons.ListItem>售卖价
          <div className="right">{sellingPrice}</div>
        </Ons.ListItem>
      </Ons.List>
      <Ons.List modifier="inset marginT">
        <Ons.ListItem>原价
          <div className="right">{originalPrice}</div>
        </Ons.ListItem>
        <Ons.ListItem>券面价
          <div className="right">{ticketPrice}</div>
        </Ons.ListItem>
        <Ons.ListItem>截止日期
          <div className="right">{endDate}</div>
        </Ons.ListItem>
        <Ons.ListItem>优惠券描述
          <div className="right">{describe}</div>
        </Ons.ListItem>
        <Ons.ListItem>订单编号
          <div className="right">{orderNo}</div>
        </Ons.ListItem>
        <Ons.ListItem>交易时间
          <div className="right">{orderDate + " " + orderTime}</div>
        </Ons.ListItem>
      </Ons.List>
    </div>
  )
}

OrderInfo.propTypes = {
  orderInfo: React.PropTypes.shape({
    orderNo: React.PropTypes.string.isRequired,
    orderDate: React.PropTypes.string.isRequired,
    orderTime: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    couponName: React.PropTypes.string.isRequired,
    isAutomaticRefund: React.PropTypes.bool.isRequired,
    couponType: React.PropTypes.string.isRequired,
    couponModality: React.PropTypes.string.isRequired,
    couponCode: React.PropTypes.string.isRequired,
    sellingPrice: React.PropTypes.string.isRequired,
    originalPrice: React.PropTypes.string.isRequired,
    ticketPrice: React.PropTypes.string.isRequired,
    endDate: React.PropTypes.string.isRequired,
    describe: React.PropTypes.string.isRequired,
    sellerNickName: React.PropTypes.string.isRequired,
    orderState: React.PropTypes.string.isRequired
  }).isRequired,
  orderPay: React.PropTypes.func,
  orderCancel: React.PropTypes.func,
  orderOpen: React.PropTypes.func
}

export default OrderInfo
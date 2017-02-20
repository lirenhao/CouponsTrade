/**
 * Author：liRenhao
 * Create Date：2017/2/14
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import * as ons from 'onsenui'
import * as Ons from 'react-onsenui'

const OrderInfo = (props) => {
  const {
    orderNo, orderDate, orderTime, id, couponName, isAutomaticRefund,
    couponType, couponModality, couponCode, sellingPrice, originalPrice,
    ticketPrice, endDate, describe, isOpen, sellerNickName, orderState
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
        {orderState === "已支付" || orderState === "已完成" ?
          (<Ons.ListItem>券码
              <div className="right">
                {isOpen ? couponCode :
                  <span className="couponCodeBg" onClick={props.orderOpen}>
                                        获取券码
                                    </span>}
              </div>
            </Ons.ListItem>
          ) : ""
        }
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
        <Ons.ListItem>是否已开启
          <div className="right">{isOpen ? "是" : "否"}</div>
        </Ons.ListItem>
        <Ons.ListItem>订单编号
          <div className="right">{orderNo}</div>
        </Ons.ListItem>
        <Ons.ListItem>交易时间
          <div className="right">{orderDate + " " + orderTime}</div>
        </Ons.ListItem>
      </Ons.List>
      {orderState === "未支付" || (
        <div className="button-bar btntab">
          <div className="button-bar__item">
            <button className="button-bar__button" onClick={props.orderPay}>
              <ons-icon icon="ion-android-done"> 支付</ons-icon>
            </button>
          </div>
          <div className="button-bar__item">
            <button className="button-bar__button"
                    onClick={() => {
                      ons.notification.confirm({
                        title: "",
                        messageHTML: "确定要取消订单吗？",
                        buttonLabels: ["确认", "取消"]
                      }).then(res => {
                        if (res === 0) {
                          props.orderCancel()
                        }
                      })
                    }}>
              <ons-icon icon="ion-android-close"> 取消</ons-icon>
            </button>
          </div>
        </div>
      )}
      {orderState === "已支付" || (
        <div className="button-bar btntab">
          <div className="button-bar__item">
            <button className="button-bar__button"
                    onClick={() => {
                      ons.notification.confirm({
                        title: "",
                        messageHTML: "在优惠券使用前确认收货有风险，货款将直接打给卖家," +
                        "确定要收货吗？",
                        buttonLabels: ["确认", "取消"]
                      }).then(res => {
                        if (res === 0) {
                          props.receiptOrderRequest({
                            apiType: 'receiptOrder',
                            param: {id: orderNo, token: props.token},
                            router: () => props.navigator.popPage()
                          })
                        }
                      })
                    }}>
              <ons-icon icon="ion-android-checkmark-circle">确认收货</ons-icon>
            </button>
          </div>
        </div>
      )}
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
    isAutomaticRefund: React.PropTypes.string.isRequired,
    couponType: React.PropTypes.string.isRequired,
    couponModality: React.PropTypes.string.isRequired,
    couponCode: React.PropTypes.string.isRequired,
    sellingPrice: React.PropTypes.string.isRequired,
    originalPrice: React.PropTypes.string.isRequired,
    ticketPrice: React.PropTypes.string.isRequired,
    endDate: React.PropTypes.string.isRequired,
    describe: React.PropTypes.string.isRequired,
    isOpen: React.PropTypes.string.isRequired,
    sellerNickName: React.PropTypes.string.isRequired,
    orderState: React.PropTypes.string.isRequired
  }).isRequired,
  orderPay: React.PropTypes.func,
  orderCancel: React.PropTypes.func,
  orderOpen: React.PropTypes.func
}

export default OrderInfo
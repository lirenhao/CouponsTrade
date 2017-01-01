/**
 * Author：Yky
 * Create Date：2016/12/14
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示已生成订单详细信息的组件
 */
import React, {PropTypes} from 'react'
import {Page, Toolbar, BackButton, List, ListHeader, ListItem, Button, BottomToolbar} from 'react-onsenui'
import {connect} from 'react-redux'
import {openCouponRequest, cancelOrderRequest, refreshOrderListRequest} from '../../actions'

const renderToolbar = () => {
	return (
		<Toolbar>
			<div className='left'>
				<BackButton>返回</BackButton>
			</div>
			<div className="center">订单信息</div>
		</Toolbar>
	)
};

const OrderInfo = (props) => {
	const {
		orderNo, orderDate, orderTime, id, couponName, isAutomaticRefund,
		couponType, couponModality, couponCode, sellingPrice, originalPrice,
		ticketPrice, endDate, describe, isOpen, sellerNickName, orderState
	}=props.orderInfo;

	const returnCouponModality = () => {
		if (orderState === "已支付" || orderState === "已完成") {
			return (
				<ListItem>券码
					<div className="right">{isOpen ? couponCode : <span className="couponCodeBg" onClick={() => {
							props.dispatch(openCouponRequest({token: props.token, id: orderNo}))
						}
						}>获取券码</span>}</div>
				</ListItem>
			)
		}
	};

	const renderBottomToolbar = () => {
		if (orderState !== "已支付" && orderState !== "已完成") {
			return (
				<BottomToolbar modifier="material">
					<Button modifier="noRadius" style={{width: "50%", textAlign: "center"}}>去支付</Button>
					<Button modifier="noRadius" style={{
						backgroundColor: "#d9534f",
						width: "50%", textAlign: "center"
					}}
					        onClick={e => {
						        props.dispatch(cancelOrderRequest({
							        token: props.token,
							        id: orderNo,
							        route: props.navigator,
							        dispatch: props.dispatch,
							        refreshOrderListRequest
						        }));
					        }}>取消订单</Button>
				</BottomToolbar>
			)
		} else if (orderState === "已支付") {
			return (
				<BottomToolbar modifier="material">
					<Button modifier="large noRadius">确认收货</Button>
				</BottomToolbar>
			)
		}
	};

	return (
		<Page renderToolbar={renderToolbar}
		      renderBottomToolbar={renderBottomToolbar}>
			<List modifier="inset marginT">
				<ListItem>
					<div className="left">
						<img className='list__item__thumbnail' src={`http://placekitten.com/g/40/40`} alt="商品图片"/>
					</div>
					<div className="center">{couponName }</div>
					<div className="right"><span className="price">{sellingPrice + "元"}</span></div>
				</ListItem>
			</List>
			<List modifier="inset marginT">
				<ListItem>卖家昵称
					<div className="right">{sellerNickName}</div>
				</ListItem>
				<ListItem>商品ID
					<div className="right">{id}</div>
				</ListItem>
				<ListItem>是否支持未开始时自动退货
					<div className="right">{isAutomaticRefund ? "是" : "否"}</div>
				</ListItem>
				<ListItem>优惠券类别
					<div className="right">{couponType}</div>
				</ListItem>
				<ListItem>券码形式
					<div className="right">{couponModality}</div>
				</ListItem>
				{returnCouponModality()}
				<ListItem>卖价
					<div className="right">{sellingPrice}</div>
				</ListItem>
			</List>
			<List modifier="inset marginT marginB">
				<ListItem>原价
					<div className="right">{originalPrice}</div>
				</ListItem>
				<ListItem>券面值
					<div className="right">{ticketPrice}</div>
				</ListItem>
				<ListItem>截止日期
					<div className="right">{endDate}</div>
				</ListItem>
				<ListItem>描述
					<div className="right">{describe}</div>
				</ListItem>
				<ListItem>是否已开启
					<div className="right">{isOpen ? "是" : "否"}</div>
				</ListItem>
				<ListItem>订单编号
					<div className="right">{orderNo}</div>
				</ListItem>
				<ListItem>交易时间
					<div className="right">{orderDate + " " + orderTime}</div>
				</ListItem>
			</List>
		</Page>
	)
};

OrderInfo.propTypes = {};

const mapStateToProps = state => {
	return {
		token: state.token,
		orderInfo: state.order.orderInfo
	}
};

export default connect(mapStateToProps)(OrderInfo)
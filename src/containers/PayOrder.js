/**
 * Author：Yky
 * Create Date：2016/12/12
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示生成订单信息的容器组件
 */
import React from 'react'
import{Page, Toolbar, Button, Input, BackButton, Icon} from 'react-onsenui'
import Address from '../components/orderInfo/Address'
import Payment_form from '../components/orderInfo/PaymentForm'

const data = {
	name: "李四",
	tel: "18688886666"
};

const itemData = {
	item: "黑松白鹿",
	price: 400
};

const handleSubmit = () => {
};

const renderToolbar = () => {
	return (
		<Toolbar>
			<div className='left'><BackButton/></div>
			<div className="center">确认订单</div>
		</Toolbar>
	)
};

const Payment = ({navigator}) => {
	return (
		<Page renderToolbar={renderToolbar}>
			<Address {...data}/>
			<Payment_form {...itemData} navigator={navigator} handleSubmit={handleSubmit}/>
		</Page>
	)
};

export default Payment
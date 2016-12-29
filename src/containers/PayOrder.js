/**
 * Author：Yky
 * Create Date：2016/12/12
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示生成订单信息的容器组件
 */
import React from 'react'
import{Page, Toolbar, BackButton} from 'react-onsenui'
import Address from '../components/orderInfo/Address'
import PaymentForm from '../components/orderInfo/PaymentForm'
import {connect} from 'react-redux'
import {payRequest} from '../action'
import OrderResult from '../components/orderInfo/OrderResult'

// const data = {
//     name: "李四",
//     tel: "18688886666"
// };
//
// const itemData = {
//     item: "黑松白鹿",
//     price: 400
// };


const renderToolbar = () => {
    return (
        <Toolbar>
            <div className='left'><BackButton>返回</BackButton></div>
            <div className="center">确认订单</div>
        </Toolbar>
    )
};

// const Payment = ({navigator, dispatch}) => {
//     const handleSubmit = (value) => {
//         dispatch(payRequest({
//             token: "1234567890", ...value,
//             route: navigator, com: OrderResult
//         }));
//     };
//     return (
//         <Page renderToolbar={renderToolbar}>
//             <Address {...data}/>
//             <PaymentForm {...itemData} navigator={navigator} onSubmit={value => handleSubmit(value)}/>
//         </Page>
//     )
// };

class Payment extends React.Component {
    render() {
        return (
            <Page renderToolbar={renderToolbar}>
                <Address {...this.props.data}/>
                <PaymentForm {...this.props.itemData} navigator={navigator} onSubmit={value => this.props.handleSubmit(value,this.props.navigator)}/>
            </Page>
        )
    }
}

const mapStateToProps = (state)=>(
{
    token: state.token,
    data: {name: state.order.orderInfo.sellerNickName, tel: "18688886666"},
    itemData: {item: state.order.orderInfo.couponName, price: state.order.orderInfo.sellingPrice}
}
)

const mapDispatchToProps = (dispatch)=>(
{
    handleSubmit: (value, navigator) => {
        console.log(value)
        dispatch(payRequest({
            token: "1234567890", ...value,
            route: navigator, com: OrderResult
        }));
    }
}
)

export default connect(mapStateToProps,mapDispatchToProps)(Payment)
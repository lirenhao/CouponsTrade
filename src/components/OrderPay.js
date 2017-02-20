/**
 * Author：liRenhao
 * Create Date：2017/2/14
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React, {PropTypes} from 'react'
import {Field, reduxForm} from 'redux-form'
import * as Ons from 'react-onsenui'

const defaultVale = {
  payment: "微信"
}

const RadioField = ({input, row}) => {
  return (
    <Ons.Input type="radio"
               inputId={`radio-${row}`}
               checked={row === input.value}
               onChange={event => input.onChange(event.target.value = row)}/>
  )
}

const OrderPay = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Ons.List
        modifier="pay"
        renderHeader={() => <Ons.ListHeader>卖家信息</Ons.ListHeader>}>
        <Ons.ListItem>
          {props.orderInfo.sellerNickName + " " + props.orderInfo.sellerTel}
        </Ons.ListItem>
      </Ons.List>
      <Ons.List
        modifier="pay"
        renderHeader={() => <Ons.ListHeader>支付方式</Ons.ListHeader>}
        dataSource={["微信"]}
        renderRow={(row) => (
          <Ons.ListItem key={row} tappable>
            <label className='right'>
              <Field name="payment" component={RadioField} row={row}/>
            </label>
            <label htmlFor={`radio-${row}`} className='center'>
              {row}
            </label>
          </Ons.ListItem>
        )}
      />
      <Ons.List
        modifier="pay"
        renderHeader={() => <Ons.ListHeader>优惠券信息</Ons.ListHeader>}>
        <Ons.ListItem>
          <div className='left'>
            <img src={`http://placekitten.com/g/40/40`} alt="图片" className='list__item__thumbnail'/>
          </div>
          <div className='center'>
            {props.orderInfo.couponName}
          </div>
          <div className="right price">{props.orderInfo.sellingPrice + "元"}</div>
        </Ons.ListItem>
      </Ons.List>
      <Ons.List modifier="pay">
        <label htmlFor="content"><Ons.ListHeader>留言</Ons.ListHeader></label>
        <Field id="content" name="content" component="textArea" className="textarea" placeholder="说点什么吧..."/>
      </Ons.List>
      <Ons.List modifier="pay marginB">
        <label htmlFor="content"><Ons.ListHeader>请在30分钟内进行支付！</Ons.ListHeader></label>
        <Ons.Button
          modifier="large noRadius"
          type="submit"
          disabled={props.submitting}
          onClick={props.submit}>
          <ons-icon icon="ion-ios-wineglass">确认支付</ons-icon>
        </Ons.Button>
      </Ons.List>
    </form>
  )
}

OrderPay.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  orderInfo: PropTypes.shape({
    sellerNickName: PropTypes.string.isRequired,
    sellerTel: PropTypes.oneOfType([
      PropTypes.string, PropTypes.number]).isRequired,
    couponName: PropTypes.string.isRequired,
    sellingPrice: PropTypes.oneOfType([
      PropTypes.string, PropTypes.number]).isRequired
  }).isRequired
}

export default reduxForm({
  form: 'orderPay',
  initialValues: defaultVale
})(OrderPay)
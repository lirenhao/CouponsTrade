/**
 * Author：Yky
 * Create Date：2016/12/14
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 创建支付信息表单的组件
 */
import React, {PropTypes} from 'react'
import {Field, reduxForm} from 'redux-form'
import {List, ListItem, ListHeader, Button, Input} from 'react-onsenui'
import ItemInfo from './ItemInfo'

const defaultValue = {
  payment: "微信"
}

const MyRadio = ({input, row}) => {
  return (
    <Input
      inputId={`radio-${row}`}
      checked={row === input.value}
      onChange={e => {
        input.onChange(e.target.value = row)
      }}
      type="radio"/>
  )
}

const renderRadioRow = row => {
  return (
    <ListItem key={row} tappable>
      <label className='right'>
        <Field name="payment" component={MyRadio} row={row}/>
      </label>
      <label htmlFor={`radio-${row}`} className='center'>
        {row}
      </label>
    </ListItem>
  )
}

const PaymentForm = props => {
  const {handleSubmit, submitting} = props
  const handleClick = () => {
    props.submit()
  }
  return (
    <form onSubmit={handleSubmit}>
      <List
        modifier="pay"
        dataSource={["微信", "支付宝"]}
        renderHeader={() => <ListHeader>支付方式</ListHeader>}
        renderRow={renderRadioRow}
      />
      <ItemInfo item={props.item} price={props.price}/>
      <List modifier="pay">
        <label htmlFor="content"><ListHeader>留言</ListHeader></label>
        <Field id="content" name="content" component="textArea" className="textarea" placeholder="说点什么吧..."/>
      </List>
      <List modifier="pay marginB">
        <label htmlFor="content"><ListHeader>请在30分钟内进行支付！</ListHeader></label>
        <Button modifier="large noRadius" type="submit" disabled={submitting}
                onClick={handleClick}>
          <ons-icon icon="ion-ios-wineglass"/>
          确认支付</Button>
      </List>
    </form>
  )
}

PaymentForm.propTypes = {
  item: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
}

export default reduxForm({
  form: 'payment',
  initialValues: defaultValue
})(PaymentForm)
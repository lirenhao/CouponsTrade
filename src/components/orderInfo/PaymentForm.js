/**
 * Author：Yky
 * Create Date：2016/12/14
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 创建支付信息表单的组件
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {List, ListItem, ListHeader, Button, Input, BottomToolbar} from 'react-onsenui'
import ItemInfo from './ItemInfo'

const defaultValue = {
    payment: "微信"
};

const MyRadio = ({input, row}) => {
    return (
        <Input
            inputId={`radio-${row}`}
            checked={row === input.value}
            onChange={(e) => {
                input.onChange(e.target.value = row)
            }}
            type="radio"/>
    )
};

const renderRadioRow = (row) => {
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
};

const Payment_form = (props) => {
    const {handleSubmit, submitting} = props;
    const handleClick = () => {
        props.submit();
    };
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
            {/*<p>应付金额：{props.price}元</p>*/}
            <BottomToolbar>
                <Button modifier="large noRadius" type="submit" disabled={submitting}
                        onClick={handleClick}>确认支付</Button>
            </BottomToolbar>
        </form>
    )
};

export default reduxForm({
    form: 'payment',
    initialValues: defaultValue
})(Payment_form)
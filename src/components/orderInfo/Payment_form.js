/**
 * Created by ALIENWARE17 on 2016/12/14.
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {List, ListItem, ListHeader, Button} from 'react-onsenui'
import ItemInfo from './ItemInfo'

const Payment_form = (props) => {
    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <List>
                <ListHeader>支付方式</ListHeader>
                <ListItem>
                    <label><Field name="payment" component="input" type="radio" value="微信"/> 微信</label>
                </ListItem>
                <ListItem>
                    <label><Field name="payment" component="input" type="radio" value="支付宝"/> 支付宝</label>
                </ListItem>
            </List>
            <ItemInfo item={props.item} price={props.price}/>
            <label>留言:</label>
            <Field name="content" component="textArea" className="textarea" placeholder="说点什么吧..."/>
            <div style={{
                "position": "absolute", "bottom": "0", "width": "100%",
                "lineHeight": "40px", "overflow": "hidden"
            }}>
                应付金额：{props.price}元
                <Button style={{"float": "right"}} type="submit">支付</Button></div>
        </form>
    )
};

export default reduxForm({
    form: 'payment'
})(Payment_form)
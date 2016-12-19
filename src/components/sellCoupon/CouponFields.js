/**
 * Author：pengfei
 * Create Date：2016/12/15
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */


import React from 'react'
import {Field} from 'redux-form'
import {Input, Switch, List, ListItem} from 'react-onsenui'

const InputComponent = ({input, type, placeholder}) => {
    return (
        <Input {...input}
               type={type}
               placeholder={placeholder} required
               float/>
    )
};

const TextAreaComponent = ({input, placeholder}) => {
    return (
        <textarea {...input}
                  className="textarea textarea--transparent"
                  rows='3'
                  placeholder={placeholder}
        />
    )
};

const CheckBoxComponent = ({input}) => {
    return (
        <Switch checked={!!input.value} onChange={(event) => {
            input.onChange(event.target.checked)
        }}/>
    )
};


const CouponFields = () => {
    return (
        <div>
            <List modifier="inset">
                <ListItem>
                    <div className="center">
                        <Field type="text" name="couponName" component={InputComponent} placeholder="商品名称"/>
                    </div>
                </ListItem>
                <ListItem>
                    <div className="center">
                        <Field type="text" name="couponCode" component={InputComponent} placeholder="商品码"/>
                    </div>
                </ListItem>
                <ListItem>
                    <div className="center">
                        <Field type="number" name="originalPrice" component={InputComponent} placeholder="原价"/>
                    </div>
                </ListItem>
                <ListItem>
                    <div className="center">
                        <Field type="number" name="sellingPrice" component={InputComponent} placeholder="售卖价"/>
                    </div>
                </ListItem>
                <ListItem>
                    <div className="center">
                        <Field type="number" name="TicketPrice" component={InputComponent} placeholder="券面价"/>
                    </div>
                </ListItem>
                <ListItem>
                    <div className="center">
                        <Field type="date" name="effectiveDate" component={InputComponent} placeholder=""/>
                    </div>
                </ListItem>
                <ListItem>
                    <div className="center">
                        自动退货
                    </div>
                    <div className="right">
                        <Field name="isAutomaticRefund" component={CheckBoxComponent}/>
                    </div>
                </ListItem>
                <ListItem>
                    <Field name="description" component={TextAreaComponent} placeholder="描述"/>
                </ListItem>
            </List>
        </div>
    )
}

export default CouponFields


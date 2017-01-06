/**
 * Author：pengfei
 * Create Date：2016/12/15
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */


import React from 'react'
import {Field} from 'redux-form'
import {Input, Switch, List, ListItem, Button} from 'react-onsenui'
import SideSelect from './SideSelect'

const InputComponent = ({input, type, placeholder}) => {
    return (
        <Input {...input}
               type={type}
               placeholder={placeholder}
               required
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

class CouponFields extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isOpen: false, couponTypeName: <ons-icon icon="ion-ios-paw-outline"> 选择类型</ons-icon>}
        this.handleClick = this.handleClick.bind(this)
        this.handleHide = this.handleHide.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }

    handleClick(couponType) {
        const map = {
            "0": <ons-icon icon="ion-ios-rose-outline"> 其他</ons-icon>,
            "1": <ons-icon icon="ion-ios-wineglass"> 餐饮</ons-icon>,
            "2": <ons-icon icon="ion-ios-game-controller-b-outline"> 娱乐</ons-icon>
        }
        const couponTypeName = map[couponType]
        this.setState({couponTypeName: couponTypeName})
    }

    handleHide() {
        this.setState({isOpen: false})
    }

    handleShow() {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <div>
                <Field name="couponType" component={SideSelect}
                       props={{
                           isOpen: this.state.isOpen,
                           listItem: [{title: "其他", value: "0"}, {title: "餐饮", value: "1"}, {title: "娱乐", value: "2"}],
                           handleClick: this.handleClick, handleHide: this.handleHide
                       }}>
                    <List modifier="inset marginT">
                        <ListItem>
                            <div className="center">
                                <Field type="text" name="couponName" component={InputComponent} placeholder="优惠券名称"/>
                            </div>
                        </ListItem>
                        <ListItem modifier="handleShow">
                            <button className="handleShow"
                                    onClick={this.handleShow}>{this.state.couponTypeName}</button>
                        </ListItem>
                        <ListItem>
                            <div className="center">
                                <Field type="text" name="couponCode" component={InputComponent} placeholder="优惠券码"/>
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
                                <Field type="number" name="ticketPrice" component={InputComponent} placeholder="券面价"/>
                            </div>
                        </ListItem>
                        <ListItem>
                            <div className="center">
                                <Field type="date" name="endDate" component={InputComponent} placeholder=""/>
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
                            <Field name="describe" component={TextAreaComponent} placeholder="描述"/>
                        </ListItem>
                    </List>
                    <Button modifier="large marginTLR marginB" disabled={this.props.invalid || this.props.submitting}
                            onClick={this.props.onSubmit}>{this.props.buttonName}</Button>
                </Field>
            </div>
        )
    }
}


export default CouponFields


/**
 * Author：pengfei
 * Create Date：2016/12/15
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import {Field} from 'redux-form'
import * as ons from 'onsenui'
import {Input, Switch, List, ListItem, Button, Icon} from 'react-onsenui'
import SideSelect from './SideSelect'
import {couponTypeListItems, couponTypeMap} from '../../constants/dataDic'
import Dropzone from 'react-dropzone'

const InputComponent = ({input, type, placeholder}) => {
    return (
        <Input {...input}
               type={type}
               placeholder={placeholder}
               required
               float/>
    )
}

const TextAreaComponent = ({input, placeholder}) => {
    return (
        <textarea {...input}
                  className="textarea textarea--transparent"
                  rows='3'
                  placeholder={placeholder}
        />
    )
}

const CheckBoxComponent = ({input}) => {
    return (
        <Switch checked={!!input.value} onChange={(event) => {
            input.onChange(event.target.checked)
        }}/>
    )
}

const ChooseImageComponent = ({input}) => {
    function handleClick() {
        if (ons.platform.isIOS())
            this.open()
    }

    return (
        <Dropzone className="center" accept="image/*"
                  onClick={handleClick}
                  onDrop={(files) => {
                      input.onChange(files[0])
                  }}>
            <img src={input.value.preview}/>
            <img src={input.value.preview}/>
            <Icon icon="ion-ios-camera-outline"/>
        </Dropzone>
    )
}

class CouponFields extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            couponTypeName: this.props.couponTypeName
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleHide = this.handleHide.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }

    handleClick(couponType) {
        const couponTypeName = couponTypeMap[couponType]
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
                           listItem: couponTypeListItems(),
                           handleClick: this.handleClick, handleHide: this.handleHide
                       }}>
                    <List modifier="inset marginT">
                        <ListItem modifier="handleShow">
                            <Field name="chooseImage" component={ChooseImageComponent}/>
                        </ListItem>
                        <ListItem modifier="handleShow">
                            <button className="handleShow" type="button"
                                    onClick={this.handleShow}>
                                <ons-icon
                                    icon="ion-android-checkmark-circle">&nbsp;{this.state.couponTypeName}</ons-icon>
                            </button>
                        </ListItem>
                        <ListItem>
                            <div className="center">
                                <Field type="text" name="couponName" component={InputComponent} placeholder="优惠券名称"/>
                            </div>
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
                                <Field type="date" name="endDate" component={InputComponent} placeholder="截止日期"/>
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
                    <Button modifier="large marginTLR marginB" disabled={this.props.disable}
                            onClick={this.props.onSubmit}>{this.props.buttonName}</Button>
                </Field>
            </div>
        )
    }
}

CouponFields.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    buttonName: React.PropTypes.string.isRequired,
    disable: React.PropTypes.bool.isRequired
}

export default CouponFields


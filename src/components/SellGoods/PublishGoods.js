/**
 * Author：pengfei
 * Create Date：2016/12/8
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input,Switch} from 'react-onsenui'


const InputComponent = ({input, type, placeholder}) => {
    return (
        <Input {...input}
               type={type}
               placeholder={placeholder}
               modifier='underbar'
               float/>
    )
};


const TextAreaComponent = ({input, placeholder}) => {
    return (
        <textarea {...input}
                  className="textarea"
                  rows='3'
                  placeholder={placeholder}
        />
    )
};


const CheckBoxComponent = ({input}) => {
    return (
        <Switch onChange={(event)=>{input.onChange(event.target.checked)}}/>
    )
};


const PublishGoods = (props)=> {
    const {handleSubmit, onSubmit, invalid, submitting} = props;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section style={{textAlign: 'center'}}>
                <p>
                    <Field type="text"
                           name="goodsTitle"
                           component={InputComponent}
                           placeholder="商品名称"/>
                </p>
                <p>
                    <Field type="text"
                           name="goodsCode"
                           component={InputComponent}
                           placeholder="商品码"/>
                </p>
                <p>
                    <Field type="number"
                           name="OldPrise"
                           component={InputComponent}
                           placeholder="原价"/>
                </p>
                <p>
                    <Field type="number"
                           name="newPrise"
                           component={InputComponent}
                           placeholder="售卖价"/>
                </p>
                <p>
                    <Field type="number"
                           name="facePrise"
                           component={InputComponent}
                           placeholder="券面价"/>
                </p>
                <p>
                    <Field type="number"
                           name="validDate"
                           component={InputComponent}
                           placeholder="有效期"/>
                </p>

                <p>
                    <label className='center'>自动退货 </label>
                    <Field name="isReturns"  component={CheckBoxComponent} />

                </p>
                <p>
                    <Field
                        name="description"
                        component={TextAreaComponent}
                        placeholder="描述"/>
                </p>
                <p>
                    <button className="button" type="submit" disabled={invalid || submitting}>确认发布</button>
                </p>
            </section>
        </form>
    )
};

PublishGoods.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
};

export default reduxForm({
    form: "PublishGoods"
})(PublishGoods)
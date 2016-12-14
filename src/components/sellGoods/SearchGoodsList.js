/**
 * Author：pengfei
 * Create Date：2016/12/13
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 查询商品组建
 */


import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Button} from 'react-onsenui'
import SellingGoodsList from './SellingGoodsList'


const SearchGoodsComponent = ({input, placeholder})=> {
    return (
        <input type="search"  placeholder={placeholder} className="search-input"/>
    )
};

const SearchGoodsList = (props)=> {
    const {handleSubmit, onSubmit, invalid, submitting, onClickPushPage, data} = props;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section style={{textAlign: 'center'}}>
                <p>
                    <Field type="text"
                           name="search-input"
                           component={SearchGoodsComponent}
                           placeholder="商品名称"/>
                    <Button className="button--quiet" type="submit" disabled={invalid || submitting} >查找</Button>
                </p>
            </section>
            <SellingGoodsList data={data} onClickPushPage={onClickPushPage}/>
        </form>
    )
};

SearchGoodsList.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    data: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            couponName: React.PropTypes.string.isRequired,
            sellingPrice: React.PropTypes.number.isRequired,
            description: React.PropTypes.string.isRequired
        })).isRequired,
    onClickPushPage:React.PropTypes.func.isRequired
};

export default reduxForm({
    form: "SearchGoodsList"
})(SearchGoodsList)


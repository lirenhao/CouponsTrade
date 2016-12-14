/**
 * Author：pengfei
 * Create Date：2016/12/13
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */


import React from 'react'
import {Field, reduxForm} from 'redux-form'
import SellingGoodsList from './SellingGoodsList'


const SearchGoodsComponent = ({input, placeholder})=> {
    return (
        <input type="search" value="" placeholder={placeholder} />
    )
};

const SearchGoodsList = (props)=> {
    const {handleSubmit, onSubmit, invalid, submitting, navigator, data} = props;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section style={{textAlign: 'center'}}>
                <p>
                    <Field type="text"
                           name="search-input"
                           component={SearchGoodsComponent}
                           placeholder="商品名称"/>
                    <button className="button--quiet" type="submit" disabled={invalid || submitting} >查找</button>
                </p>
            </section>
            <SellingGoodsList data={data} navigator={navigator}/>
        </form>
    )
};

SearchGoodsList.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    data: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            goodsTitle: React.PropTypes.string.isRequired,
            newPrise: React.PropTypes.number.isRequired,
            description: React.PropTypes.string.isRequired
        })).isRequired,
    navigator:React.PropTypes.object.isRequired
};

export default reduxForm({
    form: "SearchGoodsList"
})(SearchGoodsList)


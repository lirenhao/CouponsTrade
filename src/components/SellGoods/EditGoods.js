/**
 * Author：pengfei
 * Create Date：2016/12/13
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 编辑商品组建
 */


import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input} from 'react-onsenui'
import PublishGoods from './PublishGoods'


const EditGoods = (props)=> {
    const {onSubmit, goodsInfo} = props
    return (
        <div>
            <PublishGoods onSubmit={()=> {
            }}
                          initialValues={goodsInfo}/>
        </div>
    )
};

EditGoods.propTypes = {
    goodsInfo: React.PropTypes.shape({
        goodsTitle: React.PropTypes.string.isRequired,
        goodsCode:React.PropTypes.string.isRequired,
        OldPrise:React.PropTypes.string.isRequired,
        newPrise: React.PropTypes.string.isRequired,
        facePrise:React.PropTypes.string.isRequired,
        validDate:React.PropTypes.string.isRequired,
        isReturns:React.PropTypes.bool.isRequired,
        description: React.PropTypes.string.isRequired
    }).isRequired,
    onSubmit: React.PropTypes.func.isRequired
};


export default EditGoods




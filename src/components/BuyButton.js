/**
 * Author：likon
 * Create Date：2016/12/14
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 购买按钮组件
 */ 
import React from 'react'
import {Page} from 'react-onsenui'

const BuyButton =()=>{
    return (
        <Page>
            <p>
                <button className="button" type="submit" disabled={invalid || submitting}>确定</button>
            </p>
        </Page>
    )
}

export default BuyButton
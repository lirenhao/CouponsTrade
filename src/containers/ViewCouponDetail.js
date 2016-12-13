/**
 * Author：likon
 * Create Date：2016/12/13
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 查看优惠券详细信息容器
 */ 

import React from 'react'
import {Page,Toolbar,BackButton} from 'react-onsenui'
import CouponDetail from '../components/CouponDetail'

class ViewCouponDetail extends React.Component{
    render() {
        return (
            <Page renderToolbar={() => (
                <Toolbar>
                    <div className='left'>
                        <BackButton/>
                    </div>
                    <div className='center'>优惠券详细信息</div>
                </Toolbar>
            )}>
                <CouponDetail
                    DetailInformation={{nickname: "small_cat",CouponName:"西提厚牛排优惠券", price: "70", desc: "请各位小主们尽快下单吧~~"}}
                />
            </Page>
        )
    }
}

export default  ViewCouponDetail
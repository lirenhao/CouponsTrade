/**
 * Author：pengfei
 * Create Date：2016/12/13
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 发售中的商品列表
 */
import React from 'react'
import {List} from 'react-onsenui'
import CouponInfo from './CouponInfo'

const CouponList = ({couponList, onClickPushPage, navigator, token})=> {

    const renderRow = (row)=> {
        return (
            <CouponInfo key={row.id} couponName={row.couponName} sellingPrice={row.sellingPrice}
                        describe={row.describe} onClick={()=>onClickPushPage(token, row.id, navigator)}/>
        )
    };

    return (
        <List dataSource={couponList}
              renderHeader={() =><ons-list modifier="noborder">
                  <ons-list-item>
                      <ons-row>
                          <ons-col>
                              全部分类
                              <ons-icon icon="ion-arrow-down-b"></ons-icon>
                          </ons-col>
                          <ons-col>
                              全城
                              <ons-icon icon="ion-arrow-down-b"></ons-icon>
                          </ons-col>
                          <ons-col>
                              智能排序
                              <ons-icon icon="ion-arrow-down-b"></ons-icon>
                          </ons-col>
                      </ons-row>
                  </ons-list-item>
              </ons-list>
              }
              renderRow={renderRow}
        />
    )
};

CouponList.propTypes = {
    couponList: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            id: React.PropTypes.string.isRequired,
            couponName: React.PropTypes.string.isRequired,
            sellingPrice: React.PropTypes.number.isRequired,
            describe: React.PropTypes.string.isRequired
        })).isRequired,
    onClickPushPage: React.PropTypes.func.isRequired,
    navigator: React.PropTypes.object.isRequired,
    token: React.PropTypes.string
};

export default CouponList


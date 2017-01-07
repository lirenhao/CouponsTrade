/**
 * Author：liRenhao
 * Create Date：2017/1/7
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import {List, Icon} from 'react-onsenui'

const TypeSelect = (props) => {
    return (
        <ons-list modifier="noborder">
            <ons-list-item>
                <ons-row>
                    <ons-col>
                        全部分类
                        <Icon icon="ion-arrow-down-b"/>
                    </ons-col>
                    <ons-col>
                        全城
                        <Icon icon="ion-arrow-down-b"/>
                    </ons-col>
                    <ons-col>
                        智能排序
                        <Icon icon="ion-arrow-down-b"/>
                    </ons-col>
                </ons-row>
            </ons-list-item>
        </ons-list>
    )
}

export default TypeSelect
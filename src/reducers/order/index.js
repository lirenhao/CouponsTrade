/**
 * Author：Yky
 * Create Date：2016/12/21
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import orderList from './orderList'
import orderInfo from './orderInfo'
import page from './page'
import {combineReducers} from 'redux'

export default combineReducers({
    orderList, orderInfo, page
})
import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import token from './token'
import loading from './loading'
import inviteCode from './inviteCode'
import userInfo from './userInfo'
import orderList from './orderList'
import orderInfo from './orderInfo'

const order = combineReducers({orderList, orderInfo});

export default combineReducers({
    form, token, loading, inviteCode, userInfo,
    order
})
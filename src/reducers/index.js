import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import token from './token'
import loading from './loading'
import inviteCode from './inviteCode'
import userInfo from './userInfo'
import dialog from './dialog'
import order from './order'

export default combineReducers({
    form, token, loading, inviteCode, userInfo,
    order, dialog
})
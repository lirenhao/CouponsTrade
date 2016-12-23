/**
 * Author：liRenhao
 * Create Date：2016/12/20
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import fetch from '../src/fetch'
import {login} from '../src/action'

fetch("login", {username: "lrh", password: "111"}).then(function (data) {
    console.log(data)
})
/**
 * Author：liRenhao
 * Create Date：2016/12/19
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 向后台发送数据
 */
import  'whatwg-fetch'
import {ResponseCode} from './constants'

export default (path, param = {}) => {
  const content = Object.keys(param)
    .map((key) => key + '=' + param[key])
    .reduce((pre, cur) => pre + '&' + cur, "")
  const options = {
    method: 'post',
    body: content,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  return fetch(`http://localhost:3000/${path}`, options)
    .then(function (res) {
      return res.json()
    })
    .catch(function (e) {
      return {code: ResponseCode.TIMEOUT, msg: "请求超时"}
    })
}

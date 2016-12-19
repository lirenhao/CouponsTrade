/**
 * Author：liRenhao
 * Create Date：2016/12/19
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import fetch from 'node-fetch'

export default (path, param = {}) => {
    const content = Object.keys(param)
        .map((key) => key + '=' + param[key])
        .reduce((pre, cur) => pre + '&' + cur)
    const options = {
        method: 'post',
        body: content,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    return fetch(`http://localhost:9000/${path}`, options)
        .then(function (res) {
            return res.json()
        })
        .then(function (json) {
            console.log(json)
        })
        .catch(function (e) {
            console.log(e);
        })
}

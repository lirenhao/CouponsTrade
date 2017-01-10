/**
 * Author：pengfei
 * Create Date：2017/1/9
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */

//优惠券类型字典
export const couponTypeMap = {
    "00": "其他",
    "0": "西餐",
    "1": "海鲜",
    "2": "咖啡",
    "3": "面包糕点",
    "4": "火锅",
    "5": "烧烤",
    "6": "冰激凌",
    "7": "快餐",
    "8": "自助餐"
}

//优惠券类型展示列表
export const couponTypeListItems = ()=> {
    let list = []
    for (let key in couponTypeMap) {
        list.push({title: couponTypeMap[key], value: key})
    }
    return list
}

//优惠券状态字典（别名）
export const couponStateDic = {
    UNPUBLISHED: "0",
    PUBLISHED: "1",
    PAYING: "2",
    OVERDUE: "3",
    SOLD_UNOPENED: "4",
    SOLD_OPENED: "5"
}

//优惠券状态字典（中文）
export const couponStateMap = {
    [couponStateDic.UNPUBLISHED]: "已下架",
    [couponStateDic.PUBLISHED]: "已发布",
    [couponStateDic.PAYING]: "付款中",
    [couponStateDic.OVERDUE]: "已过期",
    [couponStateDic.SOLD_UNOPENED]: "已售（未开启）",
    [couponStateDic.SOLD_OPENED]: "已售（已开启）"
}



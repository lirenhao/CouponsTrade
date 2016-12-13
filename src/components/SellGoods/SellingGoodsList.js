/**
 * Author：pengfei
 * Create Date：2016/12/13
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import { ListItem, List, ListHeader} from 'react-onsenui'
import ViewCouponDetail from '../../containers/ViewCouponDetail'

const testData = [
    {goodsTitle: "星巴克", newPrise: 20, description: "北京所有分店"},
    {goodsTitle: "肯德基", newPrise: 20, description: "北京所有分店"},
    {goodsTitle: "火锅", newPrise: 20, description: "北京所有分店"}
];

const PriseComponent =({text,newPrise})=>{
    return(
        <div>{text +"："+  newPrise}</div>
    )
};

const GoodsInfo = ({goodsTitle, newPrise, description, navigator})=> {
     const handleClick =()=> {
        console.log("下架")
    };
    return (

            <ListItem modifier='chevron' onClick={() => navigator.pushPage({
                comp: ViewCouponDetail, props: {key: "ViewCouponDetail"}
            })}>
                <div className='left'>
                    {goodsTitle}
                </div>

                <div className='center'>
                    {description}
                </div>
                <div className='right'>
                    <PriseComponent {...{text:"价格",newPrise:newPrise}}/>
                </div>
            </ListItem>



    )
};


const SellingGoodsList = ({data, navigator})=> {
    const renderRow = (row)=> {
        return (
                <GoodsInfo key={row.goodsTitle} {...row} navigator={navigator}/>

        )

    };
    return (
        <List dataSource={testData}
              renderRow={renderRow}
              renderHeader={() => <ListHeader>发布中的商品列表</ListHeader>}
        />
    )
};

SellingGoodsList.propTypes = {
    data: React.PropTypes.string
};

export default SellingGoodsList


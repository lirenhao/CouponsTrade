/**
 * Author：likon
 * Create Date：2016/12/14
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 编辑和下架按钮组件
 */
import React from 'react'
import {SpeedDial,SpeedDialItem,Fab,Icon} from 'react-onsenui'

const EditAndSoldoutButtons =()=>{
    const click = (name)=>{console.log(name)}
    return (
        <SpeedDial>
            <Fab>
                <Icon icon='md-share'/>
            </Fab>
                <SpeedDialItem onClick={click.bind(this,"twitter")}>
                    <Icon icon='md-twitter' />
                </SpeedDialItem>
                <SpeedDialItem onClick={click.bind(this,"11111")}>
                    <Icon icon='md-twitter' />
                </SpeedDialItem>
        </SpeedDial>

    )
}

export default EditAndSoldoutButtons
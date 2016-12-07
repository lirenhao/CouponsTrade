import React from 'react'
import {
    Page,
    Tab,
    Tabbar,
    Toolbar
} from 'react-onsenui'

const renderToolbar = (title) => {
    return () => (
        <Toolbar>
            <div className='center'>{title}</div>
        </Toolbar>
    )
}

const renderTabs = () => {
    return [
        {
            content: <Page key="home" renderToolbar={renderToolbar("首页")}>首页</Page>,
            tab: <Tab key="home" label="首页" icon="ion-home"/>
        },
        {
            content: <Page key="post" renderToolbar={renderToolbar("发布")}>发布</Page>,
            tab: <Tab key="post" label="发布" icon="ion-plus"/>
        },
        {
            content: <Page key="mine" renderToolbar={renderToolbar("我的")}>我的</Page>,
            tab: <Tab key="mine" label="我的" icon="ion-person"/>
        }
    ]
}

const Tabs = () => {
    return (
        <Page>
            <Tabbar
                renderTabs={renderTabs}
            />
        </Page>
    )
}

export default Tabs
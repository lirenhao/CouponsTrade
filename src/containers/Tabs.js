import React from 'react'
import {
    Page,
    Tab,
    Tabbar,
    Toolbar
} from 'react-onsenui'

const renderTabs = () => {
    return [
        {
            content: <Page key="home" renderToolbar={() => (
                <Toolbar>
                    <div className='center'>首页</div>
                </Toolbar>)
            }>首页</Page>,
            tab: <Tab key="home" label="首页" icon="ion-home"/>
        },
        {
            content: <Page key="post" renderToolbar={() => (
                <Toolbar>
                    <div className='center'>发布</div>
                </Toolbar>)
            }>发布</Page>,
            tab: <Tab key="post" label="发布" icon="ion-plus"/>
        },
        {
            content: <Page key="mine" renderToolbar={() => (
                <Toolbar>
                    <div className='center'>我的</div>
                </Toolbar>)
            }>我的</Page>,
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
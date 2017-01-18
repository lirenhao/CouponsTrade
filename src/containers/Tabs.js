import React from 'react'
import * as Ons from 'react-onsenui'
import Navigator from './Navigator'
import Home from './Home'
import Post from './Post'
import Mine from './Mine'

const renderTabs = () => {
    return [
        {
            content: <Ons.Page key="homePage">
                <Navigator initialRoute={{comp: Home, props: {key: "home"}}}/>
            </Ons.Page>,
            tab: <Ons.Tab key="homeTab" label="首页" icon="ion-home"/>
        },
        {
            content: <Ons.Page key="postPage">
                <Navigator initialRoute={{comp: Post, props: {key: "post"}}}/>
            </Ons.Page>,
            tab: <Ons.Tab key="postTab" label="发布" icon="ion-plus"/>
        },
        {
            content: <Ons.Page key="minePage">
                <Navigator initialRoute={{comp: Mine, props: {key: "mine"}}}/>
            </Ons.Page>,
            tab: <Ons.Tab key="mineTab" label="我的" icon="ion-person"/>
        }
    ]
}

const Tabs = (props) => {
    return (
        <Ons.Page>
            <Ons.Tabbar index={props.index} renderTabs={renderTabs}/>
        </Ons.Page>
    )
}

export default Tabs
import React from 'react'
import {
    Page,
    Tab,
    Tabbar,
    Toolbar
} from 'react-onsenui'
import Home from './Home'
import Post from './Post'
import Mine from './Mine'

class Tabs extends React.Component {
    renderTabs() {
        return [
            {
                content: <Home key="home" navigator={this.props.navigator}/>,
                tab: <Tab key="home" label="首页" icon="ion-home"/>
            },
            {
                content: <Post key="post" navigator={this.props.navigator }/>,
                tab: <Tab key="post" label="发布" icon="ion-plus"/>
            },
            {
                content: <Mine key="mine" navigator={this.props.navigator}/>,
                tab: <Tab key="mine" label="我的" icon="ion-person"/>
            }
        ]
    }

    render() {
        return (
            <Page>
                <Tabbar
                    index={this.props.index || 0}
                    renderTabs={this.renderTabs.bind(this)}
                />
            </Page>
        )
    }
}

export default Tabs
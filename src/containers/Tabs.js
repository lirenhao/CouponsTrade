import React from 'react'
import {
    Page,
    Tab,
    Tabbar,
    Toolbar
} from 'react-onsenui'
import Home from '../containers/Home'
import Mine from '../containers/Mine'
import PublishCoupon from './PublishCoupon'

class Tabs extends React.Component {
    renderTabs() {
        return [
            {
                content: <Home key="home" navigator={this.props.navigator}/>,
                tab: <Tab key="home" label="首页" icon="ion-home"/>
            },
            {
                content: <Page key="post" renderToolbar={() => (
                    <Toolbar>
                        <div className='center'>发布</div>
                    </Toolbar>
                )}>
                    <PublishCoupon navigator={this.props.navigator } />
                </Page>,
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
                    renderTabs={this.renderTabs.bind(this)}
                />
            </Page>
        )
    }
}

export default Tabs
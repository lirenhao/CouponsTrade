import React from 'react'
import * as Ons from 'react-onsenui'
import Home from './Home'
import Post from './Post'
import Mine from './Mine'
import uuid from "uuid"

class Tabs extends React.Component {

    renderPage(route, navigator) {
        route.props = route.props || {}
        route.props.navigator = navigator
        route.props.key = route.props.key || uuid.v4()
        route.props.app = this.props.navigator

        return React.createElement(route.comp, route.props)
    }

    renderTabs() {
        return [
            {
                content: <Ons.Page key="homePage">
                    <Ons.Navigator
                        renderPage={this.renderPage.bind(this)}
                        initialRoute={{
                            comp: Home,
                            props: {
                                key: "home"
                            }
                        }}/>
                </Ons.Page>,
                tab: <Ons.Tab key="homeTab" label="首页" icon="ion-home"/>
            },
            {
                content: <Ons.Page key="postPage">
                    <Ons.Navigator
                        renderPage={this.renderPage.bind(this)}
                        initialRoute={{
                            comp: Post,
                            props: {
                                key: "post"
                            }
                        }}/>
                </Ons.Page>,
                tab: <Ons.Tab key="postTab" label="发布" icon="ion-plus"/>
            },
            {
                content: <Ons.Page key="minePage">
                    <Ons.Navigator
                        renderPage={this.renderPage.bind(this)}
                        initialRoute={{
                            comp: Mine,
                            props: {
                                key: "mine"
                            }
                        }}/>
                </Ons.Page>,
                tab: <Ons.Tab key="mineTab" label="我的" icon="ion-person"/>
            }
        ]
    }

    render() {
        return (
            <Ons.Page>
                <Ons.Tabbar
                    index={this.props.index}
                    renderTabs={this.renderTabs.bind(this)}
                />
            </Ons.Page>
        )
    }
}

export default Tabs
/**
 * Author：liRenhao
 * Create Date：2016/12/29
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 下拉到底部加载更多
 */
import React from 'react'
import {PullHook, Icon} from 'react-onsenui'

class PullRefresh extends React.Component {

    constructor(props) {
        super(props)
        this.state = {state: 'initial'}
        this.handleChange = this.handleChange.bind(this)
        this.handleLoad = this.handleLoad.bind(this)
        this.getContent = this.getContent.bind(this)
    }

    handleChange(event) {
        this.setState({state: event.state})
    }

    handleLoad(done) {
        this.props.onRefresh(done)
    }

    getContent() {
        switch (this.state.state) {
            case 'initial':
                return (<Icon icon="ion-ios-arrow-thin-down"/>)
            case 'preaction':
                return (<Icon icon="ion-ios-arrow-thin-up"/>)
            case 'action':
                return (<Icon icon="ion-refresh"/>)
        }
    }

    render() {
        return (
            <PullHook
                onChange={this.handleChange}
                onLoad={this.handleLoad}
            >
                {this.getContent()}
            </PullHook>
        )
    }
}

PullRefresh.propTypes = {
    onRefresh: React.PropTypes.func.isRequired
}

export default PullRefresh
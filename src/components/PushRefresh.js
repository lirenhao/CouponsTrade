/**
 * Author：liRenhao
 * Create Date：2016/12/29
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 下拉到底部加载更多
 */
import React from 'react'
import WayPoint from 'react-waypoint'
import {Icon} from 'react-onsenui'

class PushRefresh extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            boxShow: false,
            refreshShow: false,
            upShow: false,
            downShow: false
        }
    }

    render() {
        if (this.props.hasMore)
            return (
                <div>
                    <WayPoint
                        onEnter={() => {
                            this.setState({refreshShow: true})
                        }}
                        onLeave={() => {
                            this.setState({refreshShow: false})
                        }}
                    />
                    <div className={this.state.refreshShow ? "pushRefresh in" : "pushRefresh"}>
                        <Icon icon="ion-refresh"/>
                    </div>
                    <WayPoint onEnter={this.props.onRefresh}/>
                    <div>
                        <br/>
                    </div>
                </div>
            )
        else
            return (
                <div className="pushRefresh in">没有更多数据</div>
            )
    }
}

PushRefresh.propTypes = {
    hasMore: React.PropTypes.bool.isRequired,
    onRefresh: React.PropTypes.func.isRequired
}

export default PushRefresh
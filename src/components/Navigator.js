/**
 * Author：liRenhao
 * Create Date：2017/1/17
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import * as Ons from 'react-onsenui'
import uuid from "uuid"

const renderPage = app => (route, navigator) => {
  route.props = route.props || {}
  route.props.navigator = navigator
  route.props.key = route.props.key || uuid.v4()
  route.props.app = app

  return React.createElement(route.comp, route.props)
}

const Navigator = (props) => {
  return (
    <Ons.Navigator
      renderPage={renderPage(props.app)}
      initialRoute={props.initialRoute}
      onPrePush={props.pushPage}
      onPrePop={props.popPage}
    />
  )
}

Navigator.propTypes = {
  initialRoute: React.PropTypes.object.isRequired
}

Navigator.defaultProps = {
  popPage: () => {
  },
  pushPage: () => {
  }
}

export default Navigator
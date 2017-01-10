/**
 * Author：liRenhao
 * Create Date：2016/12/28
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 侧面滑出Select选择框
 */
import React from 'react'
import {Splitter, SplitterSide, SplitterContent, Page, List, ListItem, Input} from 'react-onsenui'

class SideSelect extends React.Component {

    render() {
        return (
            <Splitter>
                <SplitterSide side='right' width={220} collapse={true}
                              isOpen={this.props.isOpen} onClose={this.props.handleHide}>
                    <Page>
                        <List modifier="sideSelect">
                            {this.props.listItem.map((item, row) =>
                                <ListItem key={row} tappable onClick={() => {
                                    this.props.handleClick(item.value)
                                    this.props.input.onChange(item.value)
                                    this.props.handleHide()
                                }}>
                                    <label className='left'>
                                        <Input name={this.props.input.name}
                                               type='radio' checked={item.value == this.props.input.value}/>
                                    </label>
                                    <label htmlFor={`radio-${row}`} className='center'>
                                        {item.title}
                                    </label>
                                </ListItem>
                            )}
                        </List>
                    </Page>
                </SplitterSide>
                <SplitterContent>
                    <Page>
                        {this.props.children}
                    </Page>
                </SplitterContent>
            </Splitter>
        )
    }
}

SideSelect.propTypes = {
    isOpen: React.PropTypes.bool.isRequired,
    listItem: React.PropTypes.array.isRequired,
    handleClick: React.PropTypes.func.isRequired
}

export default SideSelect
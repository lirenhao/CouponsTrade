/**
 * Created by ALIENWARE17 on 2016/12/13.
 */
import React from 'react'
import {List, ListItem, Input, ListHeader} from 'react-onsenui'

class PayType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vegetables: [
                '微信',
                '支付宝',
                '百度钱包',
                '网银'
            ],
            selectedVegetable: '微信'
        };
        this.renderRadioRow = this::this.renderRadioRow;
    }

    handleVegetableChange(vegetable) {
        this.setState({selectedVegetable: vegetable});
    }

    renderRadioRow(row) {
        return (
            <ListItem key={row} tappable>
                <label className='right'>
                    <Input
                        inputId={`radio-${row}`}
                        checked={row === this.state.selectedVegetable}
                        onChange={this.handleVegetableChange.bind(this, row)}
                        type='radio'
                    />
                </label>
                <label htmlFor={`radio-${row}`} className='center'>
                    {row}
                </label>
            </ListItem>
        )
    }

    render() {
        return (
            <div style={{"margin": "20px 0"}}>
                <List
                    dataSource={this.state.vegetables}
                    renderHeader={() => <ListHeader style={{"fontSize": "1em"}}>支付方式</ListHeader>}
                    renderRow={this.renderRadioRow}
                />
            </div>
        )
    }
}

export default PayType
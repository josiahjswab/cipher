import React from 'react';

export default class Encode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            encodedValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentWillReceiveProps(props) {
        this.setState({encodedValue: props.encodedValue});
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value}, () => {
            this.props.travel(this.state);
        });
    }

    copy() {
        this.state.encodedValue.select();
        document.execCommand('copy');
        e.target.focus();
    }

    render() {
        return (
            <div className='code-box'>
                <div>
                    <h3>Create a unicode message:</h3>
                    <p>Input your message into the Encode text-area.</p>
                    <h4>Encode:</h4>
                </div>
                <textarea name='encodedValue' value={this.state.encodedValue} onChange={this.handleChange} placeholder='Place what you want encoded here then click the button encode.'></textarea>
                <div className='row-this'>
                    <button className='copy-textarea' onClick={() => {navigator.clipboard.writeText(this.state.encodedValue)}}>Copy</button>
                    <button className='copy-textarea yellow-button' onClick={this.props.clearEncoded}>Clear</button>
                    <button className='copy-textarea green-button' onClick={this.props.clickHandler}>Encode</button>
                </div>

            </div>
        );
    }
}

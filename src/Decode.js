import React from 'react';

export default class Decode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            encodedMess: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({encodedMess: props.encodedMess});
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value}, () => {
            this.props.travel(this.state);
        });
    }

    render() {

        return (
            <div className='code-box'>
                <div>
                    <h3>Receive a unicode message:</h3>
                    <p>Input your coded message into the Decode text-area.</p>
                    <h4>Decode:</h4>
                </div>
                <textarea name='encodedMess' value={this.state.encodedMess} onChange={this.handleChange} placeholder='Place text you want to decode here then click the button decode.'></textarea>
                <div className='row-this'>
                    <button className='copy-textarea' onClick={() => {navigator.clipboard.writeText(this.state.encodedMess)}}>Copy</button>
                    <button className='copy-textarea yellow-button' onClick={this.props.clearDecoded}>Clear</button>
                    <button className='copy-textarea green-button' onClick={this.props.clickHandler2}>Decode</button>
                </div>

            </div>
        );
    }
}

import React from 'react';
import Encode from './Encode';
import Decode from './Decode';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            encodedValue: '',
            encodedMess: ''
        };

        this.clickHandler = this.clickHandler.bind(this);
        this.clickHandler2 = this.clickHandler2.bind(this);
        this.clickHandler3 = this.clickHandler3.bind(this);
        this.travel = this.travel.bind(this);
    }

    travel(event) {
        if(!!event.encodedValue) {
            this.setState({encodedValue: event.encodedValue});
        } else if(!!event.encodedMess) {
            this.setState({encodedMess: event.encodedMess});
        }
    }

    clickHandler() {
        let encodedMess = '';
        let encodeThis = this.state.encodedValue.split('');
        for(var i=0; i < encodeThis.length; i++) {
            encodedMess += encodeThis[i].charCodeAt() + ', ';
        }
        this.setState({encodedMess: encodedMess});
    }
    clickHandler2() {
        let encodedValue = '';
        let decodeThis = this.state.encodedMess.split(',');
        for(var i=0; i < decodeThis.length; i++) {
            encodedValue += String.fromCharCode(decodeThis[i]);
        }
        this.setState({encodedValue: encodedValue});
    }
    clickHandler3() {
        this.setState({
            encodedValue: '',
            encodedMess: ''
        });
    }
 
    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <h1>Unicode Cipher</h1>
                </div>
                <div className='rowThis'>
                    <Encode 
                        encodedValue={this.state.encodedValue}
                        travel={this.travel}
                    />
                    <div className='columnThis, buttons'>
                        <button onClick={this.clickHandler}>Encode</button>
                        <button onClick={this.clickHandler2}>Decode</button>
                        <button id='clear-button' onClick={this.clickHandler3}>Clear</button>
                    </div>
                    <Decode 
                        encodedMess={this.state.encodedMess}
                        travel={this.travel}
                    />
                </div>
                <div className='footer'>
                    <p>104, 116, 116, 112, 115, 58, 47, 47, 103, 105, 116, 104, 117, 98, 46, 99, 111, 109, 47, 106, 111, 115, 105, 97, 104, 106, 115, 119, 97, 98, 47, 99, 105, 112, 104, 101, 114, </p>
                    <button className='footer-button' onClick={() => {navigator.clipboard.writeText("104, 116, 116, 112, 115, 58, 47, 47, 103, 105, 116, 104, 117, 98, 46, 99, 111, 109, 47, 106, 111, 115, 105, 97, 104, 106, 115, 119, 97, 98, 47, 99, 105, 112, 104, 101, 114, ")}}>Copy</button>
                </div>
            </div>
        );
    }
}


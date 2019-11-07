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
        this.travel = this.travel.bind(this);
    }

    travel(event) {
        // console.log(event);
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
        console.log(this.state.encodedMess.split(','));
        let encodedValue = '';
        let decodeThis = this.state.encodedMess.split(',');
        for(var i=0; i < decodeThis.length; i++) {
            encodedValue += String.fromCharCode(decodeThis[i]);
        }
        this.setState({encodedValue: encodedValue});
    }
 
    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <h1>Zeypher Cipher</h1>
                </div>
                <div className='rowThis'>
                    <Encode 
                        encodedValue={this.state.encodedValue}
                        travel={this.travel}
                    />
                    <div className='columnThis buttons'>
                        <button onClick={this.clickHandler}>▶︎</button>
                        <button onClick={this.clickHandler2}>◀︎</button>
                    </div>
                    <Decode 
                        encodedMess={this.state.encodedMess}
                        travel={this.travel}
                    />
                </div>
            </div>
        );
    }
}

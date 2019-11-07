import React from 'react';

export default class Decode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            encodedMess: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
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
                <h3>If you received a secret message:</h3>
                <p>Input your coded message into the Decode text-area and click the cooresponding arrow.</p>
                <h4>Decode:</h4>
                <textarea name='encodedMess' value={this.state.encodedMess} onChange={this.handleChange} >

                </textarea>
            </div>
        );
    }
}

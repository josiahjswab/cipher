# 🔓 Unicode Cipher 🔒

Welcome to the unicode cipher project. This project was built to excercise my React.

Install dependancies with:
```
$ npm install
```

## Points of interest in this app build:

Callbacks are used to transport the state from the child components to the parent componenets. Because setState triggers aynchronously the callback is called with an anonymous function to prevent the callback from being triggered before the setState has taken place. 

```
handleChange(event) {
    this.setState({[event.target.name]: event.target.value}, () => {
        this.props.travel(this.state);
    });
}
```

The copy buttons copy the state to the clipboard.

```
<button
    className='copy-textarea' 
    onClick={() => {navigator.clipboard.writeText(this.state.encodedValue)}}
>Copy</button>
```


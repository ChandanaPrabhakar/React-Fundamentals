import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    state = {inputValue: ''};

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.setState({inputValue: 'HelloWorld'});
    };

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <label>Enter text</label>
                    <input type='text' value={this.state.inputValue} onChange={(e) => this.setState(
                        {inputValue: e.target.value}
                    )} />
                </form>
                <br />
                <div>
                    Entered value : {this.state.inputValue}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
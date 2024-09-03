import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    state = {username: '', email: ''};

    onFormSubmission = (event) =>{
        event.preventDefault();
        this.setState(
            username= 'ChandanaPrabhakar',
            email= 'cp.devang@gmail.com'
        );
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmission}>
                    <label>Enter Username: </label>
                    <input type='text' value={this.state.username} onChange={(e) => this.setState(
                        (prev) => ({
                            ...prev,
                            username: e.target.value
                        })
                    )} />

                    <br />

                    <label>Enter Email: </label>
                    <input type='email' value={this.state.email} onChange={(e) => this.setState(
                        (prev) => ({
                            ...prev,
                            email: e.target.value
                        })
                    )} />

                    <input type='submit' value={'submit'} />
                </form>
            </div>
        );
    }

}

const Root = ReactDOM.createRoot(document.querySelector('#root'));

Root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


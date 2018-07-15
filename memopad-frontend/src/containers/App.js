import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <header>
                        <div className="ui fixed inverted menu">
                            <div className="ui container">
                                <a href="#" className="header item">
                                    Project Name
                                </a>
                            </div>
                        </div>
                    </header>
                   <Routes/> 
                </div>
            </BrowserRouter>
        )
    }

}


export default App;

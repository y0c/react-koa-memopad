import { Provider } from 'react-redux';
import store from 'store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import App from './App';

const Root = props => (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
)

export default Root;
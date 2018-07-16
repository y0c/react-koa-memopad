import React, { Component } from 'react';
import { connect } from 'react-redux';
import { injectGlobal } from 'styled-components'
import Routes from './routes';
import Loader from 'components/base/ui/Loader';


injectGlobal`
    body {
        padding-top:60px;
    }
`
class App extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <header>
                    <div className="ui fixed inverted menu">
                        <div className="ui container">
                            <a href="" className="header item">
                                Project Name
                            </a>
                        </div>
                    </div>
                </header>
            <Routes/> 
            <Loader loading={this.props.loading}/>
            </div>
        )
    }

}


export default connect(
    state => ({
        loading : state.pender.pending['auth/LOCAL_LOGIN']
    }),
    dispatch => ({

    })
)(App);

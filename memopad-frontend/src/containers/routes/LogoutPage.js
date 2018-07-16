import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as user from 'store/modules/user';

class LogoutPage extends Component {

    componentWillMount() {
        const { UserActions } = this.props;
        UserActions.logout();
    }

    render() {
        return <Redirect to="/" />;
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        UserActions : bindActionCreators(user, dispatch)
    })
)(LogoutPage);
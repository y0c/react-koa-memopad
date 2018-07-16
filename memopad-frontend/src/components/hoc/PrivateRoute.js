import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';


const PrivateRoute = ({component:Component,user, ...rest}) => {
    let renderComponent = <Component/>;

    if(!user.email) {
        renderComponent = (
            <div>로그인 후 이용하실 수 있습니다.</div>
        )
    }

    return (
        <Route
            {...rest}
            render={ () => renderComponent }
        />
    )
}

export default withRouter(PrivateRoute);
import React from 'react';
import {Route, withRouter, Redirect} from "react-router-dom";
import {getUser} from "../utils/auth";
function ProtectedRoute({component: Component, to: path, ...props}) {
    let user = getUser();
    if(!user) return <Redirect to="/login" />;
    else return <Route to={path} component={Component}/>;
}

export default withRouter(ProtectedRoute);

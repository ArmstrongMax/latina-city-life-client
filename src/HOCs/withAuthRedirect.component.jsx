import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    user: state.auth.currentUser
})

export const withAuthRedirect = WrappedComponent => {

    const RedirectComponent = ({user, ...otherProps}) => {
        if (user) return <WrappedComponent {...otherProps}/>
        return <Navigate to='/'/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}


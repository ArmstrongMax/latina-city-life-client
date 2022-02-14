import React from "react"
import {Navigate} from "react-router-dom"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectCurrentUser} from "../../redux/auth/auth.selectors"

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})

export const withAuthRedirect = WrappedComponent => {

    const RedirectComponent = ({user, ...otherProps}) => {
        if (user) return <WrappedComponent {...otherProps}/>
        return <Navigate to='/'/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}


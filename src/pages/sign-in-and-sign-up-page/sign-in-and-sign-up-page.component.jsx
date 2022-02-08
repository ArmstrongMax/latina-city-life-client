import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/auth/auth.selectors";
import {SignInAndSignUpContainer} from "./sign-in-and-sign-up-page.styles";

const SignInAndSignUp = ({currentUser}) => {
    return <>
        {currentUser
            ? <Navigate to={'/'} />
            : <SignInAndSignUpContainer>
                <SignIn/>
                <SignUp/>
        </SignInAndSignUpContainer>}
    </>
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(SignInAndSignUp)
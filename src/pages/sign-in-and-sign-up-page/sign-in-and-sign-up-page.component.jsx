import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import {connect} from "react-redux";
import {useNavigate} from "react-router";

const SignInAndSignUp = ({currentUser}) => {
    let navigate = useNavigate()
    return <>
        {currentUser
            ? navigate('/') : <><SignIn/><SignUp/></>}
    </>
}

const mapStateToProps = (state) => ({
    currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(SignInAndSignUp)
import React from "react";
import {authErrors} from '../../assets/errors-translations/authErrors'
import {ErrorAlertContainer} from "./error-alert-styles";

const ErrorAlert = ({errorMessage}) => {
    return <ErrorAlertContainer>{authErrors.get(errorMessage)}</ErrorAlertContainer>
}

export default ErrorAlert


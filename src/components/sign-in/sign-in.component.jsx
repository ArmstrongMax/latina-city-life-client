import React from "react";
import {signInStart} from "../../redux/auth/auth.actions";
import {connect} from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import {SignInContainer} from "./sign-in.styles";
import {signInSchema} from "../../validation/validationShemas";
import ValidationError from "../validation-error/validation-error.component";
import {createStructuredSelector} from "reselect";
import {selectAuthErrorMessage, selectAuthIsFetching} from "../../redux/auth/auth.selectors";
import ErrorAlert from "../error-alert/error-alert.component";

class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            validationError: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault()
        const { signInStart } = this.props
        const { email, password } = this.state
        try {
            await signInSchema.validate({email, password})
            signInStart({email, password});
        } catch (error) {
            this.setState({validationError: error.message})
        }
    };
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    render() {
        const { email, password, validationError} = this.state;
        const {errorMessage} = this.props
        return <SignInContainer>
                <h3>Войдите в систему</h3>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Почтовый адрес'
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Пароль'
                    />
                    {validationError && <ValidationError message={validationError}/>}
                    <CustomButton type='submit'>Войти</CustomButton>
                </form>
            {errorMessage && <ErrorAlert errorMessage={errorMessage}/>}
            </SignInContainer>
        ;
    }
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectAuthIsFetching,
    errorMessage: selectAuthErrorMessage
})
const mapDispatchToProps = dispatch => ({
    signInStart: (email, password) => dispatch(signInStart(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
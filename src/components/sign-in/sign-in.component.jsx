import React from "react";
import {signInStart} from "../../redux/auth/auth.actions";
import {connect} from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import {SignInContainer} from "./sign-in.styles";

class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault()
        const { signInStart } = this.props
        const { email, password } = this.state

        signInStart({email, password});
    };
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    render() {
        const { email, password} = this.state;
        return <SignInContainer>
                <h3>Войдите в систему</h3>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Почтовый адрес'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Пароль'
                        required
                    />
                    <CustomButton type='submit'>Войти</CustomButton>
                </form>
            </SignInContainer>
        ;
    }
}

const mapDispatchToProps = (dispatch) => ({
    signInStart: (email, password) => dispatch(signInStart(email, password))
})

export default connect(null, mapDispatchToProps)(SignIn)
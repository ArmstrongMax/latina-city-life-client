import React from "react";
import {signUpStart} from "../../redux/auth/auth.actions";
import {connect} from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signUpSchema} from '../../validation/validationShemas'
import ValidationError from "../validation-error/validation-error.component";

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: '',
            validationError: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {signUpStart} = this.props;
        const {firstName, lastName, email, password, passwordConfirm} = this.state;

        if (password !== passwordConfirm) {
            this.setState({validationError: 'Пароли не совпадают'})
            return;
        }
        try {
            await signUpSchema.validate({firstName, email, password, passwordConfirm})
            signUpStart({firstName, lastName, email, password, passwordConfirm});
        } catch (error) {
            this.setState({validationError: error.message})
        }
    };
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    render() {
        const {firstName, lastName, email, password, passwordConfirm, validationError} = this.state;
        return (
            <div>
                <h3>Регистрация нового пользователя</h3>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='firstName'
                        value={firstName}
                        onChange={this.handleChange}
                        label='Имя'
                    />
                    <FormInput
                        type='text'
                        name='lastName'
                        value={lastName}
                        onChange={this.handleChange}
                        label='Фамилия'
                    />
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
                    <FormInput
                        type='password'
                        name='passwordConfirm'
                        value={passwordConfirm}
                        onChange={this.handleChange}
                        label='Подтверждение пароля'
                    />
                    {validationError && <ValidationError message={validationError}/>}
                    <CustomButton type='submit'>Зарегестрироваться</CustomButton>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (firstName, lastName, email, password, passwordConfirm) => dispatch(signUpStart(firstName, lastName, email, password, passwordConfirm))
})

export default connect(null, mapDispatchToProps)(SignUp)
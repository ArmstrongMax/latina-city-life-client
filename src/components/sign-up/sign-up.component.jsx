import React from "react";
import {signUpStart} from "../../redux/auth/auth.actions";
import {connect} from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {signUpStart} = this.props;
        const {firstName, lastName, email, password, passwordConfirm} = this.state;

        if (password !== passwordConfirm) {
            alert("passwords don't match");
            return;
        }
        signUpStart({firstName, lastName, email, password, passwordConfirm});
    };
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    render() {
        const {firstName, lastName, email, password, passwordConfirm} = this.state;
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
                        required
                    />
                    <FormInput
                        type='text'
                        name='lastName'
                        value={lastName}
                        onChange={this.handleChange}
                        label='Фамилия'
                        required
                    />
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
                    <FormInput
                        type='password'
                        name='passwordConfirm'
                        value={passwordConfirm}
                        onChange={this.handleChange}
                        label='Подтверждение пароля'
                        required
                    />
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
import React from "react";

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
        const { signUpStart } = this.props;
        const { firstName, lastName, email, password, passwordConfirm } = this.state;

        if (password !== passwordConfirm) {
            alert("passwords don't match");
            return;
        }
        signUpStart({ firstName, lastName, email, password });
    };
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    render() {
        const { firstName, lastName, email, password, passwordConfirm } = this.state;
        return (
            <div>
                <span>Регистрация нового пользователя</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='firstName'
                        value={firstName}
                        onChange={this.handleChange}
                        label='Имя'
                        required
                    />
                    <input
                        type='text'
                        name='lastName'
                        value={lastName}
                        onChange={this.handleChange}
                        label='Фамилия'
                        required
                    />
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Почтовый адрес'
                        required
                    />
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Пароль'
                        required
                    />
                    <input
                        type='password'
                        name='passwordConfirm'
                        value={passwordConfirm}
                        onChange={this.handleChange}
                        label='Подтверждение пароля'
                        required
                    />
                    <button type='submit'>Зарегестрироваться</button>
                </form>
            </div>
        );
    }
}


export default SignUp
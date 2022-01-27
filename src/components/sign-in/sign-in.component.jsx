import React from "react";
import {signInStart} from "../../redux/auth/auth.actions";
import {connect} from "react-redux";

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
        return (
            <div>
                <span>Войдите в систему</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
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
                    <button type='submit'>Войти</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    signInStart: (email, password) => dispatch(signInStart(email, password))
})

export default connect(null, mapDispatchToProps)(SignIn)
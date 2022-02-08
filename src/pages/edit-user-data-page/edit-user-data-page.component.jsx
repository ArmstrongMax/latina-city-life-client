import React from "react";
import {connect} from "react-redux";
import {editUserDataStart} from "../../redux/user/user.actions";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/auth/auth.selectors";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOCs/withAuthRedirect/withAuthRedirect.component";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {
    EditUserDataPageContainer,
    FileInput,
    FormsContainer,
    RadioButtonsContainer
} from "./edit-user-data-page.styles";
import {Link} from "react-router-dom";

class EditUserDataPage extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            dancingSince: '',
            danceStyles: '',
            school: '',
            communityStatus: '',
            photo: ''
        }
        this.fileInput = React.createRef();
    }
    handleSubmitData = async event => {
        event.preventDefault()
        const {editUserDataStart} = this.props
        const {firstName, lastName, email, dancingSince, danceStyles, school, communityStatus} = this.state
        const photo = this.fileInput.current.files[0]

        editUserDataStart({firstName, lastName, email, dancingSince, danceStyles, school, communityStatus, photo});
    }
    handleSubmitPhoto = async event => {
        event.preventDefault()
        const {editUserDataStart} = this.props
        const photo = this.fileInput.current.files[0]
        editUserDataStart({photo});
    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        const {firstName, lastName, email, dancingSince, danceStyles, school} = this.state
        return <EditUserDataPageContainer>
            <FormsContainer>
                <form onSubmit={this.handleSubmitPhoto}>
                    <h3>Изменить аватар</h3>
                    <FileInput
                        type='file'
                        name='photo'
                        id='input__file'
                        ref={this.fileInput}
                    />
                    <CustomButton><label htmlFor="input__file">Выберите файл</label></CustomButton>
                    <CustomButton type='submit'>Сохранить</CustomButton>
                </form>
                <form onSubmit={this.handleSubmitData}>
                    <FormInput
                        type='text'
                        name='firstName'
                        value={firstName}
                        onChange={this.handleChange}
                        label='Имя'
                    />
                    <FormInput
                        type='lastName'
                        name='lastName'
                        value={lastName}
                        onChange={this.handleChange}
                        label='Фамилия'
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Почта'
                    />
                    <FormInput
                        type='date'
                        name='dancingSince'
                        value={dancingSince}
                        onChange={this.handleChange}
                        label='Когда начали танцевать?'
                    />
                    <FormInput
                        type='text'
                        name='danceStyles'
                        value={danceStyles}
                        onChange={this.handleChange}
                        label='Что танцуете?'
                    />
                    <FormInput
                        type='school'
                        name='school'
                        value={school}
                        onChange={this.handleChange}
                        label='В какой школе занимаетесь?'
                    />

                    <RadioButtonsContainer>
                        <label>Вы ...</label>
                        <div>
                            <input
                                id='communityStatus1'
                                type='radio'
                                name='communityStatus'
                                value='танцор'
                                onChange={this.handleChange}
                            />
                            <label htmlFor='communityStatus1'>танцор</label>
                            <input
                                id='communityStatus2'
                                type='radio'
                                name='communityStatus'
                                value='преподаватель'
                                onChange={this.handleChange}
                            />
                            <label htmlFor='communityStatus2'>преподаватель</label>

                            <input
                                id='communityStatus3'
                                type='radio'
                                name='communityStatus'
                                value='организатор'
                                onChange={this.handleChange}
                            />
                            <label htmlFor='communityStatus3'>организатор</label>
                            <input
                                id='communityStatus4'
                                type='radio'
                                name='communityStatus'
                                value='наблюдатель'
                                onChange={this.handleChange}
                            />
                            <label htmlFor='communityStatus4'>просто интересующийся</label>
                        </div>
                    </RadioButtonsContainer>
                    <CustomButton type='submit'>Сохранить</CustomButton>
                </form>
            </FormsContainer>
            <CustomButton type='button'><Link to='/'>Отменить</Link></CustomButton>
        </EditUserDataPageContainer>
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
    editUserDataStart: (userData) => dispatch(editUserDataStart(userData))
})

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(EditUserDataPage)
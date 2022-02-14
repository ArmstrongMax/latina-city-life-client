import React from "react";
import {connect} from "react-redux";
import {createEventStart} from "../../redux/evets/events.actions";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {
    AddImageAndCreateButtonsContainer,
    AddImageContainer,
    AddNewEventPageFormContainer,
    ButtonsContainer, CreateOrCancelButtonsContainer,
    FormContainer
} from "./add-new-event-page.styles";
import {Link} from "react-router-dom";
import {addNewEventSchema} from "../../validation/validationShemas";
import ValidationError from "../../components/validation-error/validation-error.component";
import {FileInput} from "../edit-user-data-page/edit-user-data-page.styles";


class AddNewEventPage extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            date: '',
            fullPrice: '',
            placeAddress: '',
            description: '',
            timeStart: '',
            timeEnd: '',
            danceStyles: '',
            validationError: ''
        }
        this.fileInput = React.createRef();
    }

    handleSubmit = async event => {
        event.preventDefault()
        const {createEventStart} = this.props
        const imageCover = this.fileInput.current.files[0]
        try {
            await addNewEventSchema.validate({...this.state})
            createEventStart({...this.state, imageCover})
        } catch (error) {
            this.setState({validationError: error.message})
        }
    };
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    render() {
        const {name, date, fullPrice, placeAddress, description, timeStart, timeEnd, danceStyles, validationError} = this.state;
        return <AddNewEventPageFormContainer className='add-new-event-form' onSubmit={this.handleSubmit}>
            <FormContainer>
                <FormInput
                    type='text'
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                    label='Название'
                />
                <FormInput
                    type='date'
                    name='date'
                    value={date}
                    label='Дата'
                    onChange={this.handleChange}
                />
                <FormInput
                    type='text'
                    name='fullPrice'
                    value={fullPrice}
                    label='Стоимость'
                    onChange={this.handleChange}
                />
                <FormInput
                    type='text'
                    name='placeAddress'
                    value={placeAddress}
                    label='Место'
                    onChange={this.handleChange}
                />
                <FormInput
                    type='text'
                    name='description'
                    value={description}
                    label='Описание'
                    onChange={this.handleChange}
                />
                <FormInput
                    type='time'
                    name='timeStart'
                    value={timeStart}
                    label='Время начала'
                    onChange={this.handleChange}
                />
                <FormInput
                    type='time'
                    name='timeEnd'
                    value={timeEnd}
                    label='Время окончания'
                    onChange={this.handleChange}
                />
                <FormInput
                    type='text'
                    name='danceStyles'
                    value={danceStyles}
                    label='Музыкальный формат'
                    onChange={this.handleChange}
                />
            </FormContainer>
            <AddImageAndCreateButtonsContainer>
            <AddImageContainer>
                <h3>Добавьте изображение</h3>
                <FileInput
                    type='file'
                    name='imageCover'
                    id='input__file'
                    ref={this.fileInput}
                />
                <CustomButton type={'button'}><label htmlFor="input__file">Выберите файл</label></CustomButton>
            </AddImageContainer>
            <CreateOrCancelButtonsContainer>
                <CustomButton type='submit'>Создать</CustomButton>
                <CustomButton type='button'><Link to='/'>Отменить</Link></CustomButton>
                {validationError && <ValidationError message={validationError}/>}
            </CreateOrCancelButtonsContainer>
            </AddImageAndCreateButtonsContainer>
        </AddNewEventPageFormContainer>
    }
}

const mapDispatchToProps = (dispatch) => ({
    createEventStart: (newEventData) => dispatch(createEventStart(newEventData))
})

export default connect(null, mapDispatchToProps)(AddNewEventPage)
import React from "react";
import {connect} from "react-redux";
import {createEventStart} from "../../redux/evets/events.actions";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {
    AddNewEventPageFormContainer,
    ButtonsContainer,
    FormContainer
} from "./add-new-event-page.styles";
import {Link, Navigate} from "react-router-dom";


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
        }
        this.fileInput = React.createRef();
    }

    handleSubmit = event => {

        event.preventDefault()
        const {createEventStart} = this.props
        createEventStart({...this.state});
    };
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    render() {
        const {name, date, fullPrice, placeAddress, description, timeStart, timeEnd, danceStyles} = this.state;
        return <AddNewEventPageFormContainer className='add-new-event-form' onSubmit={this.handleSubmit}>
                <FormContainer>
                <FormInput
                    type='text'
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                    label='Название'
                    required
                />
                <FormInput
                    type='date'
                    name='date'
                    value={date}
                    label='Дата'
                    onChange={this.handleChange}
                    required
                />
                <FormInput
                    type='text'
                    name='fullPrice'
                    value={fullPrice}
                    label='Стоимость'
                    onChange={this.handleChange}
                    required
                />
                <FormInput
                    type='text'
                    name='placeAddress'
                    value={placeAddress}
                    label='Место'
                    onChange={this.handleChange}
                    required
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
                    required
                />
                <FormInput
                    type='time'
                    name='timeEnd'
                    value={timeEnd}
                    label='Время окончания'
                    onChange={this.handleChange}
                    required
                />
                <FormInput
                    type='text'
                    name='danceStyles'
                    value={danceStyles}
                    label='Музыкальный формат'
                    onChange={this.handleChange}
                />
                </FormContainer>
                <ButtonsContainer>
                    <CustomButton type='submit'>Создать</CustomButton>
                    <CustomButton type='button'><Link to='/'>Отменить</Link></CustomButton>
                </ButtonsContainer>
            </AddNewEventPageFormContainer>
    }
}

const mapDispatchToProps = (dispatch) => ({
    createEventStart: (newEventData) => dispatch(createEventStart(newEventData))
})

export default connect(null, mapDispatchToProps)(AddNewEventPage)
import * as Yup from 'yup'

export const signInSchema = Yup.object().shape({
    password: Yup.string()
        .required('Введите пароль'),
    email: Yup.string()
        .required('Введите почту')
        .email('Неверный формат почты')
})

export const signUpSchema = Yup.object().shape({
    passwordConfirm: Yup.string()
        .required('Подтвердите пароль'),
    password: Yup.string()
        .required('Укажите пароль')
        .matches(/^(?=.*[A-Z])(?=.*\d).{8,}$/, 'Пароль только латиницей, минимум: 8 знаков, 1 заглавная буква, 1 цифра'),
    email: Yup.string()
        .required('Укажите почту')
        .email('Неверный формат почты'),
    firstName: Yup.string()
        .required('Укажите имя'),
})

export const addNewEventSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Название слишком короткое')
        .max(240, 'Название слишком длинное')
        .required('Укажите название события'),
    date: Yup.date()
        .typeError('Укажите дату события')
        .required('Укажите дату события'),
    fullPrice: Yup.number()
        .typeError('Укажите стоимость участия числом')
        .required('Укажите стоимость участия'),
    placeAddress: Yup.string()
        .required('Укажите адрес события'),
    timeStart: Yup.string()
        .required('Укажите время начала в формате ЧЧ:ММ'),
    timeEnd: Yup.string('Укажите время окончания в формате ЧЧ:ММ')
        .required(),
    description: Yup.string(),
    danceStyles: Yup.string()
})

export const editUserDataSchema = Yup.object().shape({
    firstName: Yup.string().typeError('Имя должно быть текстом'),
    lastName: Yup.string().typeError('Фамилия должна быть текстом'),
    email: Yup.string()
        .typeError('Почта должна бть текстом')
        .email('Неверный формат почты'),
    danceStyles: Yup.string().typeError('Укажите танцы текстом'),
    school: Yup.string().typeError('Укажите школу текстом')
})

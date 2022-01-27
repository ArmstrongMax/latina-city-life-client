import * as axios from "axios"


let host = 'http://127.0.0.1:8000/api/v1'
if (process.env.NODE_ENV === 'development') {
    host = 'http://127.0.0.1:8000/api/v1'
}


export const partiesEndpoint = {
    async getEvents(eventId) {
        const response = await axios.get(`${host}/parties${eventId ? '/' + eventId : ''}`).catch((error) => {
            if (error.response) {
                return error.response
            }
        })
        return response.data.data.data
    }
}

export const authEndpoint = {
    async signUp(firstName, lastName = undefined, email, password, passwordConfirm) {
        const response = await axios.post(`${host}/users/signup`, {
            firstName,
            lastName,
            email,
            password,
            passwordConfirm
        }).catch((error) => {
            if (error) return error.response
        })
        console.log(response)
        return response.data
    },

    async signIn(email, password) {
        const response = await axios.post(`${host}/users/login`, {
            email,
            password
        }).catch(error => error.response.data.message)
        if (response) return response.data.data.user
    },

    async logout() {
        const response = await axios.get(`${host}/users/logout`).catch((error) => {
            if (error) return error.response
        })
        return response.status
    }
}
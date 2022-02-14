import * as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.NODE_ENV === 'production'
        ? `${process.env.HOST}/api/v1`
        :'http://127.0.0.1:8000/api/v1'
})

export const partiesEndpoint = {
    async getEvents(eventId) {
        const response = await instance.get(`/parties${eventId ? '/' + eventId : '?sort=-date'}`).catch((error) => {
            if (error.response) {
                return error.response
            }
        })
        return response.data.data.data
    },
    async createEvent(eventData) {
        const data = {...eventData}
        let imageCover
        if (data['imageCover']) {
            imageCover = data['imageCover']
            delete data['imageCover']
        }
        const response = await instance.post('/parties', data)

        if (imageCover) {
            const formData = new FormData()
            formData.append('imageCover', imageCover)
            const updateResponse = await instance.patch(`/parties/${response.data.data.data._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            return updateResponse.data.data.data
        } else return response.data.data.data
    }
}

export const authEndpoint = {
    async signUp(firstName, lastName = undefined, email, password, passwordConfirm) {
        const response = await instance.post(`/users/signup`, {
            firstName,
            lastName,
            email,
            password,
            passwordConfirm
        }).catch((error) => {
            if (error) return error.response
        })
        return response.data.data.user
    },

    async signIn(email, password) {
        try {
            const response = await instance.post(`/users/login`, {
                email,
                password
            })
            return response.data
        } catch (error) {
            return error.response.data
        }
    },

    async logout() {
        const response = await instance.get(`/users/logout`).catch((error) => {
            if (error) return error.response
        })
        return response.status
    },

    async getMe() {
        const response = await instance.get(`/users/me`).catch(error => error.message)
        return response.data.data.data
    }
}

export const participationEndpoint = {
    async getParticipation(initiator, id) {
        const response = await instance.get(`/participation/${initiator}/${id}`).catch((error) => {
            if (error) return error.response
        })
        return response.data.data.data
    },

    async createParticipation(eventId, userId) {
        const response = await instance.post(`/participation`, {party: eventId, user: userId}).catch((error) => {
            if (error) return error.response
        })
        return response.data.data.data
    },

    async deleteParticipation(participationId) {
        await instance.delete(`/participation/${participationId}`).catch((error) => {
            if (error) return error.response
        })
    }
}

export const userEndpoint = {
    async editUserData({...userData}) {
        const sendData = {...userData}
        for (const key in sendData) {
            if (sendData[key] === '') delete sendData[key]
        }
        if (sendData.photo) {
            const formData = new FormData()
            formData.append('photo', sendData.photo)
            const response = await instance.patch(`/users/updateMe`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).catch((error) => {
                if (error) return error.response
            })
            return response.data.data.user
        } else {
            const response = await instance.patch(`/users/updateMe`, {...sendData}).catch((error) => {
                if (error) return error.response
            })
            return response.data.data.user
        }


    }
}
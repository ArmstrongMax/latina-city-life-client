import * as axios from "axios"

export const partiesApi = {
    async getAllParties() {
        const response = await axios.get(`127.0.0.1:8000/api/v1/parties`).catch((error) => {
            if (error.response) {
                return error.response
            }
        })
        return response.data
    }
}
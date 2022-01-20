import * as axios from "axios"

export const partiesApi = {
    async getAllParties() {
        console.log('start')
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/parties`).catch((error) => {
            if (error.response) {
                return error.response
            }
        })
        console.log(response)
        return response.data.data.data
    }
}
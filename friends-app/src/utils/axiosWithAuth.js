import axios from 'axios'

export const axiosWithAuth = () => {
    return axios.create({
        baseUrl: "http://localhost:5000",
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}
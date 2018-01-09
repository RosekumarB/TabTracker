import axios from 'axios'
import store from '../store/store'

export default () => {
    const token = store.getState().token.token
    return axios.create({
        baseURL: `http://localhost:8082/`, 
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
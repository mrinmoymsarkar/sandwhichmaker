import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-sandwich.firebaseio.com/'
})

export default instance;
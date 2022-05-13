import axios from 'axios'

let API_URL = ''

if (process.env.NODE_ENV === 'production') {
  API_URL = 'http://localhost:3004'
} else {
  API_URL = 'http://localhost:3004'
}

const api = axios.create({
  baseURL: API_URL,
})

export default api

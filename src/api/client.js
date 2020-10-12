import axios from 'axios';
import axiosRetry from 'axios-retry';
import ENV from './env'

const client = axios.create({
  baseURL: ENV.API,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: ENV.API_TIMEOUT
})

axiosRetry(client, {
  retries: 3,
  shouldResetTimeout: true
})

export default client

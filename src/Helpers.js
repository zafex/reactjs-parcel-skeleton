import qs from 'qs'
import Axios from 'axios'
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'

if (process.env.NODE_ENV !== 'production') {
  Axios.defaults.baseURL = 'http://localhost:9876/api'
} else {
  Axios.defaults.baseURL = '/api'
}

Axios.defaults.headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/x-www-form-urlencoded'
}

loadProgressBar()

export {
  Axios as Api,
  qs as QueryString
}

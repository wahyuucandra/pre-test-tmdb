'use server'

import axios, { AxiosError } from 'axios'

const headers = {
  'Content-Type': 'application/json',
}

const satellite = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  timeout: 300000,
  headers,
})

satellite.defaults.timeout = 300000
satellite.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

satellite.interceptors.request.use(function (config) {

  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTM1MGNiMDU1YTNkZTRjZDE5NDU1M2VlNTRmZDc1NyIsIm5iZiI6MTcyMTE0NjIxOC44MDQ5MzUsInN1YiI6IjY0ODk4OGVkZTI3MjYwMDBhZmM0YjM4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1tYByzOvkZ4sW-JLpAxGOFQGBKY_zCsptTH0QySIxX8'

  config.headers.Authorization = `Bearer ${token}`

  return config
})

satellite.interceptors.response.use(
  response => {
    return response.data
  },
  (error: Error | AxiosError) => {
    return Promise.reject(error as AxiosError)
  }
)

export default satellite

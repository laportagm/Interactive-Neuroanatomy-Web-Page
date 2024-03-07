import axios from "axios"

const DEFAULT_API_URL = "https://interactive-neuroanatomy.com/api"

const getApiBaseUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return process.env.REACT_APP_PROD_API_URL || DEFAULT_API_URL
  }
  return process.env.REACT_APP_DEV_API_URL || "http://localhost:5008/api"
}

const axiosInstance = axios.create({
  baseURL: getApiBaseUrl(),
  withCredentials: true,
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global API errors here
    console.error("API Error:", error)
    return Promise.reject(error)
  }
)

export default axiosInstance

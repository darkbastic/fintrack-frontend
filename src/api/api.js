import axios from "axios"

const api = axios.create({
    baseURL: "https://fintrack-backend-nbj2.onrender.com/api",
    headers: {
       "Content-Type": "application/json" 
    }
})

export default api;
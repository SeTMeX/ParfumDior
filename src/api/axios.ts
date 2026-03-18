import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_BASE_URL??'https://eu-geniu.eu/',
    timeout: 10000
})

api.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('accessToken')
        if(token){
            config.headers.Authorization=`Bearer ${token}`
        }
        return config
    },
    (error)=>{

        return Promise.reject(error)
    }

)

api.interceptors.response.use(
    (response)=>{
        return Promise.resolve(response)
    },
    (error)=>{
        // if(error.response.status===401){}
        return Promise.reject(error)
    }
)

export default api
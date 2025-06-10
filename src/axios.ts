import axios from 'axios';
import { useUserStore } from './stores/Users/users';

const axiosClient = axios.create({
    withCredentials: true,
    baseURL:`${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosClient.interceptors.request.use(config =>{
    const userStore = useUserStore()
    config.headers.Authorization = `Bearer ${userStore.authUser.token}`
    return config
})

export default axiosClient;
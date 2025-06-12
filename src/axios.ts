import axios from 'axios';

const axiosClient = axios.create({
    withCredentials: true,
    baseURL:`${import.meta.env.VITE_API_BASE_URL}/api`
})


export default axiosClient;